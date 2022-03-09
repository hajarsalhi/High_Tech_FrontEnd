import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { SessionLoginService } from 'src/app/services/sessionLogin/session-login.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  user = new User();

  constructor(private sessionLogin : SessionLoginService , private router : Router) { }

  ngOnInit(): void {
  }

  inscription(){
    this.sessionLogin.signIn(this.user.username,this.user.email,this.user.password,this.user.role).subscribe(result =>{
      this.router.navigate(['/LogIn']);
    }, error =>{
      console.log(error);
    });
  }

  

}
