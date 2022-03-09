import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionLoginService {

  
  login_URL = "/rest/login/";
  Logout_URL = "/rest/logout/";
  signIn_URL = "/rest/signIn/";

  constructor(private http : HttpClient) { }

  login(pUsername: string ,pPassword : string){
    const LoginData  ={
      username : pUsername,
      password : pPassword
    }

    return new Observable <boolean>( (observer )=>{
      this.http.post(this.login_URL,LoginData).subscribe(result =>{
        observer.next(true);
        observer.complete();
      },error =>{
        observer.error(false);
        observer.complete();
      });
    });
  }

  logout(){
    return new Observable<boolean>((observer )=>{
      this.http.get(this.login_URL).subscribe(result =>{
        observer.next(true);
        observer.complete();
      },error =>{
        observer.error(false);
        observer.complete();
      });
    });
  }

  signIn(pUsername: string ,pEmail : string,pPassword : string,role : string){
    
    const SigninData  ={
      username : pUsername,
      email : pEmail,
      password : pPassword,
      role : role
    }
    return new Observable<boolean>((observer)=>{
      this.http.put(this.signIn_URL,SigninData).subscribe(result =>{
        observer.next(true);
        observer.complete();
      },error =>{
        observer.error(false);
        observer.complete();
      });
    })

  }

  

}
