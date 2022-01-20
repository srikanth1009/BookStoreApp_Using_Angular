import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = environment.api_url;

  constructor(private http: HttpClient) {

  }
  createContact(reourceBody: {
    fullName: string;
    emailId: string;
    password: string;
    mobileNo: string;
    
  }) {

    return this.http.post(this.baseUrl + "/register", reourceBody);  }

  }
   