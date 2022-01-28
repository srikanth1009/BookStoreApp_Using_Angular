import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 //Method for login
 
  [x: string]: any;
  hide: boolean = true;
    // Id  : number,
    emailId: string ='';
    password: string = '';
   
  //   model:User = new User();
  // // user:any;
  signupForm:any;
  constructor(  private formBuilder: FormBuilder, private userService: UserService,   private router: Router,  private matSnakeBar: MatSnackBar) {
    this.signupForm = formBuilder.group({
     
      emailId: new FormControl(),
      password: new FormControl(),
     
    });
   }
   ngOnInit(): void {
    //  console.log(this.model);
     
   }
   PostData(signupForm: any) {
     console.log(signupForm.controls);
   }

   addLogin() {
    const newformData = {
     
      emailId: this.signupForm.controls.emailId.value,
      password: this.signupForm.controls.password.value,
     
     
    };
    this.userService.userlogin(newformData).subscribe((data: any) =>
      console.log((data))
    );
    this.router.navigateByUrl("/books");
}
}
