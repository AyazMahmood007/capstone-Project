import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private apiBaseUrl = environment.apiBaseUrl;
  constructor(private httpClient:HttpClient) { }
  brandForm: FormGroup = new FormGroup({
    brandId:new FormControl(null),
    brandName: new FormControl(''),
    brandDescription: new FormControl('')
  })

  getAllProductBrands():Observable<any>{    
      return this.httpClient.get<any>(this.apiBaseUrl+"/all-brands");     
  }

  saveProductBrand(productBrand:Object):Observable<any>{
    console.log(this.apiBaseUrl+"save-brand");
    return this.httpClient.post(this.apiBaseUrl+"/save-brand",productBrand);
  }

  initializeFormControls(){
    this.brandForm.setValue({
      brandId:'',
      brandName:'',
      brandDescription:''
    })
  }

  populateForm(brand:any){
    this.brandForm.setValue(brand);
  }
}
