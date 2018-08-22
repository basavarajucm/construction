import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {Router } from '@angular/router';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {ProjectService} from '../services/project.service';
import {projectlist} from '../projects/project';
import {assignedprojects} from './assignedproject'
@Component({
  selector: 'app-assignedprojects',
  templateUrl: './assignedprojects.component.html',
  styleUrls: ['./assignedprojects.component.css']
})
export class AssignedprojectsComponent implements OnInit {
  projectlist= [];
  assignedprojects=[];
  //displayedColumns: string[] = ['Project Id','Project Name', 'User Name', 'Email', 'Phone'];
  constructor(private router:Router, private http:Http,private project:ProjectService) { }

  

  //@ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    
    /*this.project.getProjectDetails()
    .subscribe(
      data=>{
         console.log(data);
         this.projectlist=data;
         console.log(this.projectlist);
  });*/
   
  this.project.getAssignedProjectDetails()
  .subscribe(
    data =>{
    // console.log(data);
     this.assignedprojects=data;
     console.log(this.assignedprojects);
  });
        
  }

}
