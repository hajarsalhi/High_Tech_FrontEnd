import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService  implements CanActivate{

  profile: unknown  ;
  endPointUrl = "/user/"

  constructor(private http : HttpClient) { }

  getProfil(){
    return new Observable((observer)=>{
      if(this.profile){
        observer.next(this.profile);
        observer.complete();
      } else {
        this.http.get(this.endPointUrl).subscribe(profile=>{
          this.profile = profile ;
          observer.next(profile);
          observer.complete();
        }, error =>{
          observer.error(error);
          observer.complete();
        });
      }
    });
  }

  canActivate( route : ActivatedRouteSnapshot,state : RouterStateSnapshot): Observable<boolean>{
    return  new Observable ( (observer)=>{
      this.getProfil().subscribe(profile =>{
        observer.next(true);
        observer.complete();
      })
    });
  }


}
