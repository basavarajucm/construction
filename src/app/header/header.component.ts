import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service'
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs/Observable';
import {Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'appheader',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  constructor(private router:Router) { }

  
 
  logout()
  {
    localStorage.removeItem('Userinfo');
    this.router.navigate(['/']);
  }
  ngOnInit() {
    
  }
  
  
}
