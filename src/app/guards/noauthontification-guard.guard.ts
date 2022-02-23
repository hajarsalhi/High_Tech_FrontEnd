import { Injectable } from '@angular/core';
import { Router ,ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoauthontificationGuardGuard implements CanActivate {
  
  constructor(private _router:Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {      
      
      this._router.navigate([""]);
      return true;
  }
  
}
