import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [AuthService, AuthGuardService],
  declarations: [LoginComponent],
})
export class AuthModule {}
