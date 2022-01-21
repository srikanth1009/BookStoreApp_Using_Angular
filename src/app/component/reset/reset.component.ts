import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
  public isloading = false;

  constructor( private router : Router,
              private userservice :UserService) { }

  ngOnInit(): void {
  }
  
  newPassword!:string;
  confirmPassword!:string; 
  token!:string;
  savePassword(){
    this.isloading = true;
    this.userservice.reset(this.newPassword).subscribe(data =>{
      console.log(data);
      this.onReset();
    },
  //   error=>{
  //     console.log(error)
  //  }
  )
  }
  // checkPassword(){
  //   if(this.newPassword == this.confirmPassword){
  //     return this.newPassword
  //   }
  //   return "password miss match"
  // }
  onReset(){
    this.router.navigate(['/loginform']);
  }
}
