import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private userLogin:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.form.controls["username"].value);
    console.log(this.form.controls["password"].value);

    this.userLogin.getUserByUserNameAndPassword(this.form.controls["username"].value, this.form.controls["password"].value)
      .subscribe((response:any)=>{
        if(response){         
              console.log(response);
              this.router.navigate(['/welcome']);    
          
        }
      },(error:HttpErrorResponse)=>{
          alert(error.message);
          
      });

  }
  }

  

