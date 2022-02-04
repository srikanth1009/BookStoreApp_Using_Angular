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
 totalLength:any;
 page:number=1;
  submitted=false;
  book:any;
  bookList:Book[]=[];
 
 constructor(private bookservice: BookService , private router: Router ){}
//  totalLength:any;
//  page:number =1;
 

 ngOnInit(){
   //get
   this.bookservice.getBooks().subscribe( data => { 
     this.book=data;
     this.bookList=this.book.data;
     this.totalLength=data.length;
       console.log(this.bookList);

        });
  }
  onClickBook(id:number) {
    this.router.navigate([`display/${id}`]);
  }
}
