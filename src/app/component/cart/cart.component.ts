import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/model/address';
import { Book } from 'src/app/model/book';
import { User } from 'src/app/model/user';
import { CartService } from 'src/app/service/cart.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  book:any;
  public bookList: Book[] = [];
  id!:number;
  public BookStoreFormGroup : FormGroup | undefined;
 
  constructor(private router : Router, 
    private route : ActivatedRoute,
    private cartService: CartService,
    private userService: UserService,) { 
    
  }

 ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];
 this.getCartList();
  }
  getCartList(){

    this.cartService.getCartDetails().subscribe(data=> {
      this.book=data.book;
      console.log(data);
    
    });
  }
  counter = 1;

  increment() {
    if(this.counter<10)
    this.counter++;
  }
  dicrement() {
    if(this.counter>1){
    this.counter--;
    }
   
  }

}
