import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginserviceService {
  private isUserLoggedIn;
  constructor(private http:Http) {
    this.isUserLoggedIn=false;
   }

  getuser(dob:string,fname:string,mob:string)
  {
    return this.http.post("http://localhost/ipskc/file/getdata",JSON.stringify({dob:dob,fname:fname,mob:mob}))
    .map((response:Response)=>response.json());
  }
  
  authenticateuser(id:number,otp:string)
  {
    return this.http.post("http://localhost/ipskc/file/validatedata",JSON.stringify({otp:otp,id:id}))
    .map((response:Response)=>response.json());
   
  }
  resendotp(id:number,mob:string)
  {
    return this.http.post("http://localhost/ipskc/file/resendotp",JSON.stringify({id:id,mob:mob}))
    .map((response:Response)=>response.json());
   
  }
  setUserLoggedIn()
  {
        this.isUserLoggedIn=true;
  }
  getUserLoggedIn(){
  	return this.isUserLoggedIn;
  }

}
