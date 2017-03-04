import { CanActivate, Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { AuthService } from "./auth.service";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(): Observable<boolean> {
      return this.authService.auth.map((auth) => {
        if (auth == null) {
          this.router.navigate(['/login']);
          return false;
        } else {
          return true;
        }
      }).first();
    }

}
