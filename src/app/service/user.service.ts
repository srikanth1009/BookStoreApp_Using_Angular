import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FortgotPassword } from '../model/forgot-password';
import { ResetPassword } from '../model/reset-password';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = environment.api_url;

  constructor(private http: HttpClient) {

  }//method Sign up
  createContact(reourceBody: {
    fullName: string;
    emailId: string;
    password: string;
    mobileNo: string;
    
  }) {

    return this.http.post(this.baseUrl + "/register", reourceBody); 
   }

//Method for Login  
    userlogin(login : {
     emailId: string;
    password: string;
    }){
      return this.http.post(this.baseUrl + "/userlogin", login )
    }

   
     forgotPassword(forgotPassword:FortgotPassword){
      return this.http.post(this.baseUrl + "/forgotpassword", forgotPassword);
    }
    resetUserPassword(token:string, resetpassword:ResetPassword):Observable<Object>{
      return this.http.post(`${this.baseUrl}/resetpassword/${token}`, resetpassword);
    }
    isLoggedIn() {
      return !!localStorage.getItem('token');
    }
  
  }
   