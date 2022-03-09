import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionLoginService } from '../services/sessionLogin/session-login.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleGuard implements CanActivate {

  constructor(private  sessionLoginService : SessionLoginService, private router : Router){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      if(this.sessionLoginService.isAdmin(this.sessionLoginService.loggedUser))
        return true;
      return false ;
  }
  
}
