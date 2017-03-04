import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  // private _authenticated$: boolean;

  constructor(private angularFire: AngularFire) {}

  get auth(): Observable<any> {
    return this.angularFire.auth;
  }

  // isAuthenticated(): Observable<boolean> {
  //   return _authenticated$.asObservable();
  // }

  loginGoogle() {
    return this.angularFire.auth.login({
      provider: AuthProviders.Google,
    });
  }

  logout() {
    return this.angularFire.auth.logout();
  }
}
