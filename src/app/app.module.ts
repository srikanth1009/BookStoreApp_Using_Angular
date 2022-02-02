import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './component/signup/signup.component';
import { MaterialModule } from './material/material/material.module';
import { LoginComponent } from './component/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component';
import { ResetComponent } from './component/reset/reset.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FooterComponent } from './component/footer/footer.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DisplayBooksComponent } from './display-books/display-books.component';
import { CartComponent } from './component/cart/cart.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import {MatListModule} from '@angular/material/list';
import { OrderSucessfulComponent } from './order-sucessful/order-sucessful.component';
import { WhishlistLoginSignupComponent } from './component/whishlist-login-signup/whishlist-login-signup.component';
import { MyOrderComponent } from './component/my-order/my-order.component';
import { EditProfileComponent } from './component/edit-profile/edit-profile.component';
import { AuthGuard } from './service/auth.guard';
import { MatDialog } from '@angular/material/dialog';
import { Token } from './model/token';
import { User } from './model/user';
import {MatPaginatorModule} from '@angular/material/paginator';
import {NgxPaginationModule} from 'ngx-pagination'; 

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ResetComponent,
    HeaderComponent,
    ForgotPasswordComponent,
    FooterComponent,
    DashboardComponent,
    DisplayBooksComponent,
    OrderSucessfulComponent,
    MyOrderComponent,
    CartComponent,
    WishlistComponent,
    OrderSucessfulComponent,
    WhishlistLoginSignupComponent,
    EditProfileComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    FlexLayoutModule,
    MatListModule,
    MatPaginatorModule,
    NgxPaginationModule
    


    // MatFormFieldModule,
    // MatInputModule,
    // MatButtonModule,
    // MatIconModule
  
    ],

  providers: [AuthGuard , MatDialog, User],
  bootstrap: [AppComponent]

})
export class AppModule { }
