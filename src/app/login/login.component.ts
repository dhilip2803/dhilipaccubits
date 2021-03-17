import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public Emailid:string = "";
  public Password:string = "";

  constructor(
    private appComponent: AppComponent,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
Login(){
  debugger
  if(this.Emailid == "Admin" && this.Password=="admin"){
      this.appComponent.isloginclocked=true;
  }
  else{
    alert("Incorrect Email or Password");
    this.Emailid = "";
    this.Password ="";
    this.appComponent.isloginclocked=false;

  }
  
}
}
