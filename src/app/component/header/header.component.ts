import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMe: boolean =false;
  
  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  removeToken(){
    localStorage.removeItem("token");
    this.router.navigateByUrl("/signupform");
  }

toogleTag(){
  this.showMe=!this.showMe
}
}
