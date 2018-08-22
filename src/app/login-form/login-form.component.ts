import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router } from '@angular/router';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { loginService } from '../services/login.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  title = 'CONSTRUCTION';
  //loginDetail:loginDetails;
   
  email;
  password;
  hide:boolean=true;
  loginstatus:boolean;
  flag:boolean;

 emailFormControl = new FormControl('', [Validators.required,Validators.email,]);

 pwdFormControl = new FormControl('', [ Validators.required,]);

  constructor(private router:Router, private http:Http,private login:loginService){
}

loginUser()
{
  console.log(this.email);
  console.log(this.password);

  this.login.getUserData(this.email,this.password)
  .subscribe(
    data=>{
     console.log(data);
      this.loginstatus = data.status;
      //console.log(this.loginstatus);
      if(this.loginstatus)
      {
       localStorage.setItem('Userinfo',JSON.stringify(data));
       this.router.navigate(['projects']);
      }
    else
    {
           
           alert('please enter a valid username and password');
    }
    });

    
  }



}

