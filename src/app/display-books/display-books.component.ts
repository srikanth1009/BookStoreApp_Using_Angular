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

  // registerForm!:FormGroup;
  // submitted=false;
  // user:any;
  // book:any;
  bookList:Book[]=[];

 id!:number;
 model: Book = new Book();
  constructor( private route:ActivatedRoute, private bookservice: BookService ) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getSingleBook();
  }

  getSingleBook(){
    this.bookservice.getBookById(this.id).subscribe(
      data=>{ this.model = data },
      error=>{ console.log(error)}
    );
  }
}
