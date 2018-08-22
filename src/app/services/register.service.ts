import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService {

  constructor(private http:Http) { }
   url:string="http://adkambs.com/ConstructionApp/ConstructionApp/";
  savedata(uname:string, email:string, password:string, phone:string)
  {
    console.log(uname);
    console.log(password);
    console.log(email);
    console.log(phone);
    return this.http.post(this.url,JSON.stringify({uname:uname,email:email,password:password, phone:phone}))
    .map((response:Response)=>response.json());
  }

}
