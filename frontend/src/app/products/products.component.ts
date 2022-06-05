import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from '../shared/product.service';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  searchKey:string;

  displayedColumns: string[] = ['productName', 'productDescription', 'status','productLocation','productType','productGrade','productSize','action'];
  productsList:MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private productService:ProductService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getAllProducts()
    .subscribe((response)=>{
      if(response){
        console.log(response);
        this.productsList =  new MatTableDataSource(response);
        this.productsList.sort = this.sort;
        this.productsList.paginator = this.paginator;
      }
    },(error:HttpErrorResponse)=>{
      console.log(error.message);
    })
  }


  applyFilter(event:any){
    this.productsList.filter = this.searchKey.trim().toLowerCase();
  }

  clearSearhField(){
    this.searchKey = "";
  }

  onCreate(){
    this.productService.initializeFormControls();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
   this.dialog.open(ProductComponent,dialogConfig);
  }

  onEdit(row:any){
    this.productService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
   this.dialog.open(ProductComponent,dialogConfig);
  }

}
