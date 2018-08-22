import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';
import {Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router:Router) {
    
   }
   photo:string="./assets/icons/logo.png";
  notifications= [
    {name:'IPSKC State Level UG Psychiatry Quiz 2018'},
    {name:'IPSKC State Level UG Psychiatry Quiz 2019'},
    {name:'IPSKC State Level UG Psychiatry Quiz 2020'},

  ];
  viewNofication(title:string)
  {
    console.log(title);
    this.router.navigate(['viewNotification',{title:title}]);
  }
 

    
 
  ngOnInit() {
    
  }
  
}
