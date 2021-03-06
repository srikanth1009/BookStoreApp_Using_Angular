import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EditProfileComponent } from './component/edit-profile/edit-profile.component';
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
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  // {path:'', component:LoginComponent},
  // {path:'', component:SignupComponent},
  {path:'loginform', component:LoginComponent},
  { path: '' , redirectTo: 'loginform', pathMatch: 'full' },
  {path:'signupform', component:SignupComponent },
  { path: 'reset/:token', component: ResetComponent},
  {path:'forgot', component:ForgotPasswordComponent},
  {path:'books', component:DashboardComponent, canActivate: [AuthGuard]},
  {path:'display/:id', component:DisplayBooksComponent},
  {path: 'search/:searchTerm', component:DisplayBooksComponent},
  {path:'profile', component:EditProfileComponent},
  {path: 'myorder', component: MyOrderComponent},
  {path:'cart',component:CartComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'wishlistlogin',component:WhishlistLoginSignupComponent},
  { path: 'order', component: OrderSucessfulComponent },
  // { path: '' , redirectTo: 'loginform', pathMatch: 'full'},
  { path: '' , redirectTo: 'signupform', pathMatch: 'full'},
  {path:'forgot', component:ForgotPasswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
