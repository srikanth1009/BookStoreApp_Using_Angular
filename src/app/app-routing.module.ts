import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { ResetComponent } from './component/reset/reset.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  // {path:'', component:LoginComponent},
  {path:'', component:SignupComponent},
  {path:'signupform', component:SignupComponent},
  {path:'loginform', component:LoginComponent},
  {path:'reset', component:ResetComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
