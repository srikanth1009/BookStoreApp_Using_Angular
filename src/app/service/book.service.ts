import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(  private httpClient: HttpClient ) { }
  //get call
  
  getBooks(){
    return this.httpClient.get(environment.book_api+'/getbooks');
  }
}
