import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { MyOrderComponent } from './component/my-order/my-order.component';
import { ResetComponent } from './component/reset/reset.component';
import { SignupComponent } from './component/signup/signup.component';
import { WhishlistLoginSignupComponent } from './component/whishlist-login-signup/whishlist-login-signup.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { DisplayBooksComponent } from './display-books/display-books.component';
import { OrderSucessfulComponent } from './order-sucessful/order-sucessful.component';

const routes: Routes = [
  // {path:'', component:LoginComponent},
  // {path:'', component:SignupComponent},
  {path:'loginform', component:LoginComponent},
  {path:'signupform', component:SignupComponent},
  { path: 'reset/:token', component: ResetComponent},
  { path: '' , redirectTo: 'signupform', pathMatch: 'full'},
  {path:'forgot', component:ForgotPasswordComponent},
  {path:'books', component:DashboardComponent},
  {path:'display', component:DisplayBooksComponent},
  
  {path: 'myorder', component: MyOrderComponent},
  {path:'cart',component:CartComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'wishlistlogin',component:WhishlistLoginSignupComponent},
  { path: 'order', component: OrderSucessfulComponent }

 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
