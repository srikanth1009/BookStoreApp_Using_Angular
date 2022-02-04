import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMe: boolean =false;
  
  searchTerm:string ="";
  isCart: boolean | undefined;
  searchBook: string | undefined;

  constructor(private userService: UserService, private router: Router, private route:ActivatedRoute) { }

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
// onKey(event: any) {
//   this.userService.searchUserBook(event);
//   this.isCart = false;
// }
}
