import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { User } from '../user';

@Component({
  selector: 'app-new-user-session',
  templateUrl: './new-user-session.component.html',
  styleUrls: ['./new-user-session.component.css']
})
export class NewUserSessionComponent implements OnInit {
  constructor(private _tokenService: Angular2TokenService) {}
  model = new User('', '', '');

  ngOnInit() {
    this._tokenService.init({
      registerAccountPath: '/api/auth',
      validateTokenPath: '/api/auth/validate_token',
      signInPath: '/api/auth/sign_in',
    });
  }

  signIn() {
    this._tokenService.signIn({
      email: this.model.email,
      password: this.model.password
    });
  }
}
