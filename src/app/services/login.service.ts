import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class loginService {

    url:string="http://adkambs.com/ConstructionApp/ConstructionApp/Welcome/getUser";
  
  constructor(private http:Http) { }

  getUserData(email:string, password:string)
  {
  return this.http.post(this.url,JSON.stringify({email:email,password:password}))
  .map((response:Response)=>response.json());
  }
 
}