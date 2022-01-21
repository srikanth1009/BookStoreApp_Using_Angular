import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = environment.api_url;

  constructor(private http: HttpClient) {}
  public register(user: any): Observable<any> {
    console.log(user);
    return this.http.post(this.baseUrl + "/register", user);
  }
  public reset(token:string){
    return this.http.post(this.baseUrl +"/resetpassword",token);
  }
}
