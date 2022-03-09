import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionLoginService } from 'src/app/services/sessionLogin/session-login.service';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  username = "" ;
  password = "" ;
  wrongCredentials = false ;
  constructor(private sessionLogin : SessionLoginService , private router : Router) { }

  ngOnInit(): void {
  }

  connexion(){
    this.wrongCredentials = false ;
    this.sessionLogin.login(this.username,this.password).subscribe(result =>{
      this.router.navigate(['/Home']);
    }, error =>{
      this.wrongCredentials = true ;
    });
  }

}
