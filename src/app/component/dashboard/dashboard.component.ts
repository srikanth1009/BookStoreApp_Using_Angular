import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  submitted=false;
  book:any;
  bookList:Book[]=[];
 
 constructor(private bookservice: BookService , private router: Router ){}
 ngOnInit(){
   //get
   this.bookservice.getBooks().subscribe( data => { 
     this.book=data;
     this.bookList=this.book.data;
       console.log(this.bookList);

        });
  }
  //   get f(){
  //   return this.registerForm.controls;
  // }
  // getOne(){
  //   this.bookservice.getOne(this.bookId).subscribe( data => { 
  //     // this.data = data;
  //     console.log(data);
      
  //   })
  // }
  onClickBook(id:number) {
    this.router.navigate([`display/${id}`]);
  }
}
