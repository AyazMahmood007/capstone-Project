import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiBaseUrl = environment.apiBaseUrl;
  constructor(private httpClient:HttpClient) { }

  getUserByUserNameAndPassword(userName:any, password:any):Observable<any>{
    return this.httpClient.get<any>(this.apiBaseUrl+"/login?userName="+userName+"&password="+password);
   }
}
