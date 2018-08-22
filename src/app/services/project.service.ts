import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {projectlist} from '../projects/project';
import {assignedprojects} from '../assignedprojects/assignedproject'

@Injectable()
export class ProjectService {

  url:string="http://adkambs.com/ConstructionApp/ConstructionApp/Welcome/getProjectDetails";
  constructor(private http:Http) { }

  getProjectDetails(uid:number):Observable<projectlist[]>
  {
     return this.http.post(this.url,JSON.stringify({uid:uid}))
     .map((response:Response)=><projectlist[]>response.json());
  }
  getAssignedProjectDetails():Observable<assignedprojects[]>
  {
    return this.http.get("http://adkambs.com/ConstructionApp/ConstructionApp/Welcome/getAssignedProjectDetails")
    .map((response:Response)=><assignedprojects[]>response.json());
  }

}
