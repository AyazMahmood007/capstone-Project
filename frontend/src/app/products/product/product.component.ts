import { RepositionScrollStrategy } from '@angular/cdk/overlay';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductBrand } from 'src/app/brands/brand/brand.component';
import { ProductCategory } from 'src/app/categories/category/category.component';
import { BrandService } from 'src/app/shared/brand.service';
import { CategoryService } from 'src/app/shared/category.service';
import { ProductService } from 'src/app/shared/product.service';




export class Product {
  productId: number;
  productName: string;
  productDescription: string;
  productLocationId: number;
  productCategoryId: number;
  productSubCategoryId: number;
  productTypeId: number;
  costPrice: number;
  qty: number;
  size: string;
  status: string;
  season: string;
  grade: string;
  constructor() { }
}

class ProductType {
  productTypeId: number;
  productTypeName: string;
  constructor() { }
}

interface Season {
  value: number;
  viewValue: string;
}

class Location {
  locationId: number;
  locationName: string;
  constructor() { }
}

interface Size {
  value: number;
  viewValue: string;
}

interface Grade {
  value: number;
  viewValue: string;
}
interface Status {
  value: number;
  viewValue: string;
}





@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productBrands: ProductBrand[] = [];
  productCategories: ProductCategory[] = [];
  productTypes: ProductType[] = [];

  seasons: Season[] = [{ value: 1, viewValue: "Winter" },
  { value: 2, viewValue: "Summer" },
  { value: 3, viewValue: "Spring" },
  { value: 4, viewValue: "Autmn" },
  { value: 5, viewValue: "All Season" }];

  locations: Location[] = [];

  sizes: Size[] = [{ value: 1, viewValue: "S" },
  { value: 2, viewValue: "M" },
  { value: 3, viewValue: "L" },
  { value: 4, viewValue: "XL" },
  { value: 5, viewValue: "OSize" }];

  grades: Grade[] = [{ value: 1, viewValue: "H" },
  { value: 2, viewValue: "-H" },
  { value: 3, viewValue: "N" },
  { value: 4, viewValue: "CTC" },
  { value: 5, viewValue: "BC" }];

  statuses: Status[] = [{ value: 1, viewValue: "Ok" },
  { value: 2, viewValue: "Defective" },
  { value: 3, viewValue: "Out Of Fashion" }
  ];

  constructor(public productService: ProductService,
    private brandService: BrandService,
    private categoryService: CategoryService,
    public dialogRef: MatDialogRef<ProductComponent>,
    private router: Router) {
  }

  ngOnInit(): void {
    this.getAllProductBrands();
    this.getAllProductCategories();
    this.getAllProductLocations();
    this.getAllProductTypes();
  }


  getAllProductBrands() {
    this.brandService.getAllProductBrands()
      .subscribe((resposne: any) => {
        if (resposne) {
          for (let e of resposne) {
            let productBrand = new ProductBrand();
            //console.log(e);            
            productBrand.brandId = e["brandId"];
            productBrand.brandName = e["brandName"]
            this.productBrands.push(productBrand);
          }
        }
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

  getAllProductCategories() {
    this.categoryService.getAllProductCategories()
      .subscribe((response) => {
        if (response) {
          for (let catgory of response) {
            //console.log(catgory);
            let productCategory = new ProductCategory();
            productCategory.categoryId = catgory["categoryId"];
            productCategory.categoryName = catgory["categoryName"];
            this.productCategories.push(productCategory);

          }
        }
      }, (error: HttpErrorResponse) => {
        alert(error.message);
      });
  }

  getAllProductLocations() {
    this.productService.getAllProductLocations()
      .subscribe((response) => {
        if (response) {
          for (let location of response) {
            let productLocation = new Location();
            productLocation.locationId = location["locationId"];
            productLocation.locationName = location["locationName"];
            this.locations.push(productLocation);
          }
        }
      }, (error: HttpErrorResponse) => {
        if (error.status === 404) {
          console.log(error.message);
        }
      });
  }

  getAllProductTypes() {
    this.productService.getAllProductTypes()
      .subscribe((response) => {
        if (response) {
          for (let type of response) {
            let productType = new ProductType();
            productType.productTypeId = type["productTypeId"];
            productType.productTypeName = type["productTypeName"];
            this.productTypes.push(productType);
          }
        }
      }, (error: HttpErrorResponse) => {
        if (error.status === 404) {
          console.log(error.message);
        }
      })
  }

  onSubmit() {
    console.log(this.productService.productForm.controls["productLocationId"].value);
    let product = new Product();
    if (this.productService.productForm.controls["productId"].value) {
      product.productId = this.productService.productForm.controls["productLocationId"].value;
    }
    product.productName = this.productService.productForm.controls["productName"].value;
    product.productDescription = this.productService.productForm.controls["productDescription"].value;
    product.productLocationId = this.productService.productForm.controls["productLocationId"].value;
    product.productCategoryId = this.productService.productForm.controls["productCategoryId"].value;
    product.size = this.productService.productForm.controls["size"].value;
    product.season = this.productService.productForm.controls["season"].value;
    product.grade = this.productService.productForm.controls["grade"].value;
    product.status = this.productService.productForm.controls["status"].value;
    product.costPrice = this.productService.productForm.controls["costPrice"].value;
    product.qty = this.productService.productForm.controls["qty"].value;
    this.productService.saveProduct(product)
      .subscribe((response) => {
        console.log(response);
        if (response) {
          console.log(response);
          this.router.navigateByUrl('/', { skipLocationChange: true })
            .then(() => this.router.navigate(['/product']));
        }
      }, (error: HttpErrorResponse) => {
        console.log(error);
      });
  }

  onclose() {
    this.productService.productForm.reset();
    this.productService.initializeFormControls();
    this.dialogRef.close();
  }

}
