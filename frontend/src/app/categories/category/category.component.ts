import { HttpErrorResponse } from '@angular/common/http';
import {  Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/category.service';
import {MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';


export class ProductCategory {
  categoryId:number;
  categoryName: string;
  categoryDescription: string;
  categoryStatus: string;
  constructor(){}
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
   
  
  
  constructor(public categoryService: CategoryService,
    public dialogRef:MatDialogRef<CategoryComponent>,
    private router:Router) {
   }

  ngOnInit(): void {}
  

  getAllProductCategories() {
    this.categoryService.getAllProductCategories()
      .subscribe((resposne: any) => {
        if (resposne) {
          console.log(resposne);
        }
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

  onSubmit(){    
    console.log(this.categoryService.categoryForm.controls["categoryId"].value);
    let productCategory =  new ProductCategory();
    productCategory.categoryName =    this.categoryService.categoryForm.controls["categoryName"].value;
    productCategory.categoryDescription =    this.categoryService.categoryForm.controls["categoryDescription"].value;
    productCategory.categoryStatus =    this.categoryService.categoryForm.controls["categoryStatus"].value;
    console.log(productCategory); 
    this.categoryService.saveProductCategory(productCategory)
    .subscribe((response)=>{
      if(response){
        console.log(response);
        this.router.navigateByUrl('/', {skipLocationChange: true})
        .then(() => this.router.navigate(['/category']));
      }
    });
    
    this.onclose();
  }

  onclose(){
    this.categoryService.categoryForm.reset();
    this.categoryService.initializeFormControls();
    this.dialogRef.close();
  }

  
}

