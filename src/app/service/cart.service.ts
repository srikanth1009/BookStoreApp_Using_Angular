import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  base_url=environment.cart_api;
  constructor(private httpClient: HttpClient) { }
  addToCart(reourceBody: { userId : number; bookId : number; quantity : number; }){
    return this.httpClient.post(`${this.base_url}/add`,reourceBody)
  }
  getCartDetails() : Observable<any> {
    return this.httpClient.get(`${this.base_url}/getAll`);
  }
  

}
