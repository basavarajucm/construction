import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router } from '@angular/router';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {ProjectService} from '../services/project.service';
import {projectlist} from './project';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  currentUser;
  user_id;
  id;
  flag:boolean=false;
  isresponse:boolean=false;
  public projectlist=[];
  
  constructor(private router:Router, private http:Http,private project:ProjectService) { }

  
   


chatdetails(id:number)
{
    
      this.router.navigate(['chatdetails',{id:id}]);
}  

  ngOnInit() { 
    
    this.currentUser = JSON.parse(localStorage.getItem('Userinfo'));
    console.log(this.currentUser);
    this.user_id = this.currentUser['uid'];
    console.log(this.user_id);
    this.project.getProjectDetails(this.user_id)
    .subscribe(
      data=>{
            if(data)
            {
                this.projectlist=data;
                this.isresponse=true;
                console.log(this.projectlist);
            }
            else
            {
                  this.isresponse=true;
                  this.flag=true;
            }
        
  });

}












}
