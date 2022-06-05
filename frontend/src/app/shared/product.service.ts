import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiBaseUrl = environment.apiBaseUrl;
  constructor(private httpClient: HttpClient) { }
  productForm: FormGroup = new FormGroup({
    productId: new FormControl(null),
    productName: new FormControl(null),
    productDescription: new FormControl(null),
    productLocationId: new FormControl(null),
    productCategoryId: new FormControl(null),
    productTypeId: new FormControl(null),
    season: new FormControl(null),
    grade: new FormControl(null),
    costPrice: new FormControl(null),
    qty: new FormControl(null),
    size: new FormControl(''),
    status: new FormControl('')
  })


  getAllProducts():Observable<any>{
    return this.httpClient.get(this.apiBaseUrl+"/get-all-products");
  }

  getAllProductTypes():Observable<any>{
    return this.httpClient.get(this.apiBaseUrl+"/get-all-types");
  }

  getAllProductLocations():Observable<any>{
    return this.httpClient.get(this.apiBaseUrl+"/get-all-locations");
  }


  saveProduct(prodduct: Object): Observable<any> {
    console.log(this.apiBaseUrl + "/save-product");
    return this.httpClient.post(this.apiBaseUrl + "/save-product", prodduct);
  }

  initializeFormControls() {
    this.productForm.setValue({
      productId: '',
      productName: '',
      productDescription: '',
      productLocationId: '',
      productCategoryId: '',
      productTypeId: '',
      costPrice: '',
      season: '',
      grade: '',
      qty: '',
      size: '',
      status: ''
    })
  }

  populateForm(prouduct: any) {
    this.productForm.setValue(prouduct);
  }
}
