import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { AddbookComponent } from './addbook/addbook/addbook.component';
=======
import { DashboardComponent } from './component/dashboard/dashboard.component';
>>>>>>> 486ee50d65fc496efc080f21c99a66b6515bfc0d
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { ResetComponent } from './component/reset/reset.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  // {path:'', component:LoginComponent},
  // {path:'', component:SignupComponent},
  {path:'loginform', component:LoginComponent},
  {path:'signupform', component:SignupComponent},
  { path: 'reset/:token', component: ResetComponent},
  { path: '' , redirectTo: 'loginform', pathMatch: 'full'},
  {path:'forgot', component:ForgotPasswordComponent},
<<<<<<< HEAD
  {path:'addbook', component:AddbookComponent}
=======
  {path:'books', component:DashboardComponent},
>>>>>>> 486ee50d65fc496efc080f21c99a66b6515bfc0d


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
