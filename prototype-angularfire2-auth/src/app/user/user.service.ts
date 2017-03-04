// import { Injectable } from '@angular/core';
// import { AngularFire } from 'angularfire2';
// import { Observable } from 'rxjs/Observable';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// interface User {
//   providerData?: Object;
//   email?: string;
// }

// @Injectable()
// export class AuthService {
//   // private _userSource: BehaviorSubject<User>;
//   // private _user$: Observable<User>;
//   // private _authSource: BehaviorSubject;
//   // private _auth$: Observable;

//   constructor(
//     private angularFire: AngularFire
//   ) {
//     console.log(this.angularFire.auth);
//     // this._userSource = new BehaviorSubject<User>(null);
//     // this._user$ = this._userSource.asObservable();

//     // this.angularFire.auth.subscribe(afUser => {
//     //   if (afUser) {
//     //     let user:User = {};
//     //     user.providerData = afUser.auth.providerData[0];
//     //     user.email = afUser.auth.providerData[0].email;
//     //     this._userSource.next(user);
//     //   } else {
//     //     this._userSource.next(null);
//     //   }
//     // });
//   }

//   // getUser() {
//   //   return this._user$;
//   // }

//   get auth(): Observable<any> {
//     return this.angularFire.auth;
//   }

//   login() {
//     this.angularFire.auth.login();
//   }

//   logout() {
//     this.angularFire.auth.logout();
//   }
// }
