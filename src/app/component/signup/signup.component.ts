import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  [x: string]: any;
  hide: boolean = true;
    // Id  : number,
    fullName:string ='';
    emailId: string ='';
    password: string = '';
    mobileNo: string  = '';
  // user:any;
  signupForm:any;
  constructor(  private formBuilder: FormBuilder, private userService: UserService,   private router: Router,  private matSnakeBar: MatSnackBar) {
    this.signupForm = formBuilder.group({
      fullName: new FormControl(),
      emailId: new FormControl(),
      password: new FormControl(),
      mobileNo: new FormControl(),
    });
   }
   ngOnInit(): void {}
   PostData(signupForm: any) {
     console.log(signupForm.controls);
   }

   addNewContact() {
    const newformData = {
      fullName: this.signupForm.controls.fullName.value,
      emailId: this.signupForm.controls.emailId.value,
      password: this.signupForm.controls.password.value,
      mobileNo: this.signupForm.controls.mobileNo.value,
     
    };
    this.userService.createContact(newformData).subscribe((data: any) =>
      console.log((data))
    );
    this.router.navigateByUrl("/loginform");
}
}
