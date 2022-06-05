import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BrandService } from 'src/app/shared/brand.service';

export class ProductBrand{
  brandId:number;
  brandName:string;
  brandDescription:string
  constructor(){}
}

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  constructor(public brandService: BrandService,
    public dialogRef:MatDialogRef<BrandComponent>,
    private router:Router) {
   }

  ngOnInit(): void {}
  

  getAllProductBrands() {
    this.brandService.getAllProductBrands()
      .subscribe((resposne: any) => {
        if (resposne) {
          console.log(resposne);
        }
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

  onSubmit(){    
    console.log(this.brandService.brandForm.controls["brandId"].value);
    let productBrand =  new ProductBrand();
    if(this.brandService.brandForm.controls["brandId"].value){
      productBrand.brandId = this.brandService.brandForm.controls["brandId"].value
    }
    productBrand.brandName =    this.brandService.brandForm.controls["brandName"].value;
    productBrand.brandDescription =    this.brandService.brandForm.controls["brandDescription"].value;
    
    console.log(productBrand); 
    this.brandService.saveProductBrand(productBrand)
    .subscribe((response)=>{
      if(response){
        console.log(response);
        this.router.navigateByUrl('/', {skipLocationChange: true})
        .then(() => this.router.navigate(['/brand']));
      }
    });
    
    this.onclose();
  }

  onclose(){
    this.brandService.brandForm.reset();
    this.brandService.initializeFormControls();
    this.dialogRef.close();
  }

}
