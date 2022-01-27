import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  public hide:boolean=true;
  // profile:string=localStorage.getItem('image');
  // fullName:string=localStorage.getItem('username');
  password:string="Anant";
  constructor() { }

  ngOnInit(): void {
  }

}
