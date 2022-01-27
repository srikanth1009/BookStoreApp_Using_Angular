import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  getBookDetails() {
    throw new Error('Method not implemented.');
  }

  baseUrl = environment.book_api;
  constructor(  private httpClient: HttpClient ) { }
  //get call
  
  getBooks(){
    return this.httpClient.get(environment.book_api+'/getBooks');
  }

  getBookById(id: number):Observable<Book>{
    return this.httpClient.get<Book>(`${this.baseUrl}/Book/${id}`);
  }

}

