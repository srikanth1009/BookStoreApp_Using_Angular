import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/model/address';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
 
  constructor() { 
    
  }

 ngOnInit(): void {
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
