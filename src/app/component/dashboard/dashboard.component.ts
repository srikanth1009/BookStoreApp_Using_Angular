import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  registerForm!:FormGroup;
  submitted=false;
  book:any;
  bookList:Book[]=[];

 constructor(private bookservice: BookService ){}
 ngOnInit(){
   //get
   this.bookservice.getBooks().subscribe( data => { 
     this.book=data;
     this.bookList=this.book.data;
       console.log(this.bookList);

        });
  }
    get f(){
    return this.registerForm.controls;
  }
 
}

