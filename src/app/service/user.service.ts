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

  constructor( private httpClient:HttpClient) { }

  addUserDetails(user: User) :Observable<any> {
    console.log(user);
    return this.httpClient.post(this.baseUrl + "/register", user);
  }
}
