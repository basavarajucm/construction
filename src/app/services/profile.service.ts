import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  url:string="http://adkambs.com/ConstructionApp/ConstructionApp/Welcome/getProfileDetails";
  constructor(private http:Http) { }

  getProfileData(uid:number)
  {
    return this.http.post(this.url,JSON.stringify({uid:uid}))
    .map((response:Response)=>response.json());
  }
  updateProfile(uid:number,uname:string,email:string,phone:string,password:string)
  {
    return this.http.post("http://adkambs.com/ConstructionApp/ConstructionApp/Welcome/updateDetails",JSON.stringify({uid:uid,uname:uname,email:email,phone:phone,password:password}))
    .map((response:Response)=>response.json());
  }
}
