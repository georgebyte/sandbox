import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private user$: Observable<any>;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user$ = this.authService.getUser();
    this.authService.getUser().subscribe(user => console.log(user));
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
