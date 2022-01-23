import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  [x: string]: any;
  baseUrl = environment.book_api;
  constructor(  private httpClient: HttpClient ) { }
  //get call
  
  getBooks(){
    return this.httpClient.get(environment.book_api+'/getbooks');
  }

  getBookById(){
    return this.httpClient.get(environment.book_api+'/getBookDetailsByID/1 ');
  }

}

