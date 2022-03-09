import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionLoginService } from 'src/app/services/sessionLogin/session-login.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  username = "" ;
  password = "" ;
  constructor(private sessionLogin : SessionLoginService , private router : Router) { }

  ngOnInit(): void {
  }

  inscription(){
    this.sessionLogin.login(this.username,this.password).subscribe(result =>{
      this.router.navigate(['/LogIn']);
    }, error =>{
      console.log(error);
    });
  }

  

}
