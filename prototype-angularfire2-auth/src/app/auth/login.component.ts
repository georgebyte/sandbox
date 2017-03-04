import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'bpp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.auth.subscribe(auth => {
      if (auth) {
        this.router.navigate(['/dashboard']);
      }
    });
  }

  loginGoogle() {
    this.authService.loginGoogle()
      .then(() => {
        this.router.navigate(['/dashboard']);
      }).catch((error) => {
        // this.error = error;
      });
  }
}
