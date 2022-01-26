import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../model/book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-display-books', 
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.scss']
})
export class DisplayBooksComponent implements OnInit {

  registerForm!:FormGroup;
  submitted=false;
  user:any;
  book:any;
  bookList:Book[]=[];
  bookId:any;
  constructor( private route:ActivatedRoute, private bookservice: BookService ) { }

  ngOnInit() {
    this.bookId

//get
this.bookservice.getBooks().subscribe( data => { 
  this.book=data;
  this.bookList=this.book.data;
    console.log(this.bookList);

     });
  
  }
   getBookDetails(bookId:number){
 
    this.bookservice.getBookById(bookId).subscribe((data) => {
      console.log(data);
    });

}
}
