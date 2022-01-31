import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Token } from '../model/token';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
   token : Token = new Token();

  base_url=environment.cart_api;
  constructor(private httpClient: HttpClient , private router: Router,  private matSnakeBar: MatSnackBar ) {

   }

  addToCart(reourceBody: { userId : number; bookId : number; quantity : number; } ){
    return this.httpClient.post(`${this.base_url}/add`,reourceBody );
  

    
  }


  getCartDetails( ) : Observable<any> {
    return this.httpClient.get(`${this.base_url}/get`);
  }
  

}
