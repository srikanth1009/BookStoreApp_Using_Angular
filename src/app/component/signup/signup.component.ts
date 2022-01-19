import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  // hide: boolean = true;
  public error = null;
  public isloading = false;
  public form = { 
    // Id  : number,
    fullName:null,
    emailId: null,
    password: null,
    mobileNo: null,
  // user:any;
  };
   
 

  constructor( private userService: UserService,   private router: Router,  private matSnakeBar: MatSnackBar) { }
  

  ngOnInit() {
  }

  onSubmit() {
    this.isloading = true;
          this.userService.register(this.form).subscribe(data =>{
            console.log("post",data);
            
          })
          this.router.navigateByUrl("/loginform");
   
  
}
}

