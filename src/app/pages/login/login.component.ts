import { AuthGoogleService } from './../../service/auth-google.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private authGoogle: AuthGoogleService){

  }


  loginGoogle(){
    this.authGoogle.login();
  }

  logOutGoogle(){
    this.authGoogle.logout();
  }
}
