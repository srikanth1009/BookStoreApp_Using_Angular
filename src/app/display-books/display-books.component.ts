import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../model/book';
import { Token } from '../model/token';
import { BookService } from '../service/book.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-display-books', 
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.scss']
})
export class DisplayBooksComponent implements OnInit {
  
  book:any;
  bookList:Book[]=[];

 id!:number;
//  model: Book = new Book();
  constructor( private route:ActivatedRoute,    private router : Router, 
    private bookservice: BookService, private matSnackBar: MatSnackBar, private cartService: CartService ) { 

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getSingleBook();
  }

  getSingleBook(){

    this.bookservice.getBookById(this.id).subscribe(data=>{ 
        this.book=data;
        console.log(data);
        console.log( this.book );
  
      },
      error=>{ console.log(error)},
    );
  }
 
  

  AddToBag(book:any) {
    console.log(book);
    this.cartService.addToCart(book).subscribe(data =>{
      console.log("post",data) ,localStorage.getItem('token');
      this.matSnackBar.open('Book is added successfully to Cart ' , 'ok', {
        duration: 3000
      });
      this.router.navigateByUrl("/"); 
    })
  }
  
}
