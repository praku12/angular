import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent} from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifyMailComponent } from './verify-mail/verify-mail.component';


const routes: Routes = [

  {
      path: 'register',
      component: RegisterComponent,
      data: {
        title: 'Page 500'
      }
    },
    {
      path: 'login',
      component: LoginComponent,
      data: {
        title: 'Page 500'
      }
    },
    {
      path: 'forgot-password',
      component: ForgotPasswordComponent,
      data: {
        title: 'Page 500'
      }
    },
    {
      path: 'reset-password',
      component: ResetPasswordComponent,
      data: {
        title: 'Page 500'
      }
    },
    {
      path: 'verify-mail',
      component: VerifyMailComponent,
      data: {
        title: 'Page 500'
      }
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganiserRoutingModule { }
