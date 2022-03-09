import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

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
      this.http.post(this.signIn_URL,SigninData).subscribe(result =>{
        observer.next(true);
        observer.complete();
      },error =>{
        observer.error(false);
        observer.complete();
      });
    })

  }

  getUserFromDB(username : string) : Observable<User>{
    return this.http.get<User>(this.login_URL);
  }

  isAdmin(username : string) : boolean{
    let admin : boolean = false ;
    this.getUserFromDB(username).subscribe((user : User)=>{
      if(user.role == 'ADMIN')
        admin = true ;  
    })

    return admin;
  }
  
  

}
