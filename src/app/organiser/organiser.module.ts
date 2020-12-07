import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganiserRoutingModule } from './organiser-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyMailComponent } from './verify-mail/verify-mail.component';


@NgModule({
  declarations: [RegisterComponent, LoginComponent, ForgotPasswordComponent, ResetPasswordComponent, VerifyMailComponent],
  imports: [
    CommonModule,
    OrganiserRoutingModule
  ]
})
export class OrganiserModule { }
