import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/model/address';
import { Book } from 'src/app/model/book';
import { Cart } from 'src/app/model/cart';
import { User } from 'src/app/model/user';
import { CartService } from 'src/app/service/cart.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Array<any> = [];
  cartId: any;
  book: any;
  public bookList = [];
  cartlist: any;
  bookquant = 0
  booklisadd: any = [];
  booklistdetail: Array<any> = [];
  id: any;
  // public BookStoreFormGroup : FormGroup | undefined;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService,
    private userService: UserService,) {

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getCartList();
    // this.removeCarts(this.id);
  }
  getCartList() {

    this.cartService.getCartDetails().subscribe(data => {
      this.bookList = data.cartlist;
      this.bookquant = data.cartlist[0].book
      this.booklistdetail = this.bookList.map((element: any) => {

        if (element.book) {

          return element.book
        }
      })
      console.log(this.booklistdetail);
      this.cartId = this.bookList.map((cartid: any) => {
        if (cartid.id) {
          return cartid.id
        }
      })
      console.log(this.cartId);
    });
  }
  removeCart(cartid: number) {
    this.cartService.removeCartDetails(cartid).subscribe((resource => {

    }))
  }
  // removeCarts(id: number) {
  //   for (let index = 0; index < this.cartId.length; index++) {
  //     const element = this.cartId[index];
  //     console.log( element );

  //   }

  // }
  counter = 1;
  increment() {
    if (this.counter < 10)
      this.counter++;
  }
  dicrement() {
    if (this.counter > 1) {
      this.counter--;
    }
  }
}
