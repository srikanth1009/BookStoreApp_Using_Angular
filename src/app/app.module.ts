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
import {MatListModule} from '@angular/material/list';
import { OrderSucessfulComponent } from './order-sucessful/order-sucessful.component';
import { MyOrderComponent } from './my-order/my-order.component';

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
    MyOrderComponent
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
    MatListModule


    // MatFormFieldModule,
    // MatInputModule,
    // MatButtonModule,
    // MatIconModule
  
    ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
