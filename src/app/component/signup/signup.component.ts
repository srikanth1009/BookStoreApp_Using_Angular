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
  hide: boolean = true;
  public error = null;
  public isloading = false;
  public form = { 
    // Id  : number,
    fullName:"string",
    emailId: "string",
    password: "string",
    mobileNo: "string",
  // user:any;
  };
   
 

  constructor( private userService: UserService,   private router: Router,
    private matSnakeBar: MatSnackBar) { }
  

  ngOnInit(): void {
  }

  onSubmit() {
    this.isloading = true;
          this.userService.addUserDetails(this.form).subscribe(data =>{
            console.log("post",data);
            
          })
          this.router.navigateByUrl("/loginform");
   
  
}
}

