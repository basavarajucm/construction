import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewNotification',
  templateUrl: './viewNotification.component.html',
  styleUrls: ['./home-page.component.css']
})
export class viewNotificationComponent implements OnInit
{   
     title:string;
    constructor(private router:Router,private activate:ActivatedRoute)
    {

    }
    goBack()
    {
        this.router.navigate(['HomePage']);
    }
    ngOnInit(){
        this.activate.params.subscribe(params=>{
        this.title=params.title;
        //console.log(this.title);
        });
    }
        
}