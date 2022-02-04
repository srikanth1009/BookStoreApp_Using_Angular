import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { Token } from 'src/app/model/token';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public tok: Token = new Token;
  [x: string]: any;
  hide: boolean = true;
  emailId: string = '';
  password: string = '';
  fetchedToken: Token = new Token();
  signupForm: any;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private matSnakeBar: MatSnackBar) {

    this.signupForm = formBuilder.group({

      emailId: new FormControl(),
      password: new FormControl(),

    });
  }
  ngOnInit(): void {

  }
  PostData(signupForm: any) {
    console.log(signupForm.controls);
  } ;

  addLogin() {
    const newformData = {

      emailId: this.signupForm.controls.emailId.value,
      password: this.signupForm.controls.password.value,
    };
    this.userService.userlogin(newformData).subscribe((data: any) => {
      console.log(data);
      let token = data.data

      localStorage.setItem('token', JSON.stringify(token))
    }
    );
    this.router.navigateByUrl("/books");
  }
}
function data(data: any) {
  throw new Error('Function not implemented.');
}

