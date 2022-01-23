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
<<<<<<< HEAD
import { AddbookComponent } from './addbook/addbook/addbook.component';
=======
import { FooterComponent } from './component/footer/footer.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
>>>>>>> 486ee50d65fc496efc080f21c99a66b6515bfc0d
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    ResetComponent,
    HeaderComponent,
    ForgotPasswordComponent,
<<<<<<< HEAD
    AddbookComponent
=======
    FooterComponent,
    DashboardComponent
>>>>>>> 486ee50d65fc496efc080f21c99a66b6515bfc0d
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
    MatIconModule


    // MatFormFieldModule,
    // MatInputModule,
    // MatButtonModule,
    // MatIconModule
  
    ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
