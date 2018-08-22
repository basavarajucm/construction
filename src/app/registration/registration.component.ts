import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router } from '@angular/router';
import { Http,Response } from '@angular/http';
import { RegisterService } from '../services/register.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  hide:true;
  usrname;
  usremail;
  usrphone
  usrpassword;
  usrcpassword;
  passwordstatus:boolean;

  
  emailFormControl = new FormControl('', [ Validators.required,Validators.email,]);

  nameFormControl = new FormControl('', [ Validators.required,]);

  phoneFormControl = new FormControl('', [Validators.required,]);

  pwdFormControl = new FormControl('', [ Validators.required,]);

  cpwdFormControl = new FormControl('', [ Validators.required,]);

  constructor(private router:Router, private http:Http, private register:RegisterService) { }

  registerUser()
  {
    /*console.log(this.uname);
     console.log(this.email);
    console.log(this.phone);
    console.log(this.password);
    console.log(this.cpassword);*/

    if(this.usrpassword != this.usrcpassword)
    {
      console.log('password not match');
      this.passwordstatus=true;
      this.router.navigate(['/']);
    }
    else
    {
      this.register.savedata(this.usrname,this.usrpassword,this.usremail,this.usrphone)
    .subscribe(
      data=>{
        console.log(data);
      });
    }
   
  }

  ngOnInit() {
  }

}
