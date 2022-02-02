import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMe: boolean =false;
  
  searchTerm:string ="";

  constructor( private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.searchTerm = params['searchTerm'];
    })


  }
  removeToken(){
    localStorage.removeItem("token");
    this.router.navigateByUrl("/signupform");
  }
  getCartDetails(){
    this.router.navigateByUrl("/cart");
  }

toogleTag(){
  this.showMe=!this.showMe
}
}
