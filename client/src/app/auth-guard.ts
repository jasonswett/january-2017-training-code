import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private _tokenService: Angular2TokenService,
    private router: Router) {}

  canActivate():Observable<boolean>|boolean {
    this._tokenService.init({
      validateTokenPath: '/api/auth/validate_token'
    });

    return Observable.create(observer => {
      this._tokenService.validateToken().subscribe(
        res => observer.next(true),
        err => {
          this.router.navigate(['/sign-in']);
          observer.next(false);
        });
    }); }
}
