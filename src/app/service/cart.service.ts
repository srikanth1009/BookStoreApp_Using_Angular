import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cart } from '../model/cart';
import { Token } from '../model/token';

@Injectable({
  providedIn: 'root'
})
export class CartService { 
a=localStorage.getItem('token');   
t=JSON.parse(this.a || '{}');

  base_url=environment.cart_api;
  constructor(private httpClient: HttpClient , private router: Router,  private matSnakeBar: MatSnackBar ) {
   }

  addToCart(bookId:number, cart:Cart):Observable<Object>{
    let myHead = new HttpHeaders({
    'content-type':'application/json',
    'token':this.t
   })
    let options = { headers: myHead }
    return this.httpClient.post(`${this.base_url}/add/${bookId}`,cart,options)
    
  }
  getCartDetails( ) : Observable<any> {
    let myHead = new HttpHeaders({
      'content-type':'application/json',
      'token':this.t
     })
      let options = { headers: myHead }
    return this.httpClient.get(`${this.base_url}/get`,options);
  }
}
