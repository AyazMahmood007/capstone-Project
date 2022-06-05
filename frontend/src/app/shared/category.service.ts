import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiBaseUrl = environment.apiBaseUrl;
  constructor(private httpClient:HttpClient) { }
  categoryForm: FormGroup = new FormGroup({
    categoryId:new FormControl(null),
    categoryName: new FormControl(''),
    categoryDescription: new FormControl(''),
    categoryStatus: new FormControl('')
  })

  getAllProductCategories():Observable<any>{    
      return this.httpClient.get<any>(this.apiBaseUrl+"/all-categories");     
  }

  saveProductCategory(prodductCategory:Object):Observable<any>{
    console.log(this.apiBaseUrl+"/addCategory");
    return this.httpClient.post(this.apiBaseUrl+"/addCategory",prodductCategory);
  }

  initializeFormControls(){
    this.categoryForm.setValue({
      categoryId:'',
      categoryName:'',
      categoryDescription:'',
      categoryStatus:''

    })
  }

  populateForm(category:any){
    this.categoryForm.setValue(category);
  }
}
