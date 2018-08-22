import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { loginService } from '../services/login.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthguardGuard implements CanActivate {
  constructor(private login:loginService,private router:Router){
     
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     /* this.router.navigate(['/']);
    return this.login.getUserLoggedIn();*/
    if(localStorage.getItem('Userinfo'))
    {
     this.router.navigate(['HomePage']);
      return true;
    }
   // this.router.navigate(['/']);
    return true;
  }
}
