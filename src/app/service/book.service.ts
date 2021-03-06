import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  public search=new BehaviorSubject<string>("");

  getBookDetails() {
    throw new Error('Method not implemented.');
  }

  baseUrl = environment.book_api;
  constructor(  private httpClient: HttpClient ) { }
  //get call
  
  
  getBooks() {
    return this.httpClient.get<[Book]>(`${this.baseUrl}/getBooks`);
  }
  getBookById(id: number){
    return this.httpClient.get(`${this.baseUrl}/Book/${id}`);
  }

}

