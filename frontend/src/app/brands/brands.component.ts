import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BrandService } from '../shared/brand.service';
import { BrandComponent } from './brand/brand.component';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  displayedColumns: string[] = ['brandName', 'brandDescription','action'];
  brandsList:MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  searchKey:string;

  constructor(private brandService:BrandService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getAllCategories()
  }

  getAllCategories(){
    this.brandService.getAllProductBrands().subscribe((response)=>{
        this.brandsList =  new MatTableDataSource(response);
        this.brandsList.sort = this.sort;
        this.brandsList.paginator = this.paginator;
        //console.log(this.categoriesList);
    })
    
  }

  applyFilter(event: Event) {
   // const filterValue = (event.target as HTMLInputElement).value;
    //console.log(filterValue);
    this.brandsList.filter = this.searchKey.trim().toLowerCase();
  }

  clearSearhField(){
    this.searchKey="";
  }

  onCreate(){
    this.brandService.initializeFormControls();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="40%";
   this.dialog.open(BrandComponent,dialogConfig);
  }

  onEdit(row:any){
    this.brandService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="40%";
   this.dialog.open(BrandComponent,dialogConfig);
  }

}
