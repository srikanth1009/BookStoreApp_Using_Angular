import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../model/book';
import { Cart } from '../model/cart';
import { BookService } from '../service/book.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.scss'],
})
export class DisplayBooksComponent implements OnInit {
  book: any;
  bookList: Book[] = [];
  id!: number;
  cartModel: Cart = new Cart();
  //  model: Book = new Book();
  constructor(private route: ActivatedRoute, private router: Router,
    private bookservice: BookService, private matSnackBar: MatSnackBar, private cartService: CartService) {

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getSingleBook();
    // this.AddToBag(this.book);
  }
  getSingleBook() {
    this.bookservice.getBookById(this.id).subscribe(
      (data) => {
        this.book = data;
        console.log(data);
        console.log(this.book);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  AddToBag(id: any) {
    this.cartModel.quantity = 1;
    this.cartService.addToCart(this.id, this.cartModel).subscribe((data: any) => {
      console.log("post", data)
     alert("Book is added successfully to Cart ");
      this.router.navigateByUrl("/display");

    })
  }
}
