import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from '../shared/category.service';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { CategoryComponent } from './category/category.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  displayedColumns: string[] = ['categoryName', 'categoryDescription', 'categoryStatus','action'];
  categoriesList:MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  searchKey:string;

  constructor(private categoryService:CategoryService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getAllCategories()
  }

  getAllCategories(){
    this.categoryService.getAllProductCategories().subscribe((response)=>{
        this.categoriesList =  new MatTableDataSource(response);
        this.categoriesList.sort = this.sort;
        this.categoriesList.paginator = this.paginator;
        //console.log(this.categoriesList);
    })
    
  }

  applyFilter(event: Event) {
   // const filterValue = (event.target as HTMLInputElement).value;
    //console.log(filterValue);
    this.categoriesList.filter = this.searchKey.trim().toLowerCase();
  }

  clearSearhField(){
    this.searchKey="";
  }

  onCreate(){
    this.categoryService.initializeFormControls();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="40%";
   this.dialog.open(CategoryComponent,dialogConfig);
  }

  onEdit(row:any){
    this.categoryService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="40%";
   this.dialog.open(CategoryComponent,dialogConfig);
  }
  
}
