import { Component, OnInit } from '@angular/core';
//import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
//Password:string = "";

  constructor(
    //readonly loginComponent : LoginComponent
    ) { }

  ngOnInit(): void {
    let userMail = "";
  }
//userMail = this.loginComponent.Emailid;
//this.userMail= this.loginComponent.Emailid;
}
