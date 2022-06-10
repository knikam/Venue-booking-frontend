import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userlogin = true;
  userregister = false;

  //Login
  loginForm:FormGroup;
  submitted: boolean = false;
  authRequest: any;
  response: any;

  //Register
  registerForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  user_register()
  {
    this.userlogin = false;
    this.userregister = true;
  }
  user_login()
  {
    this.userlogin = true;
    this.userregister = false;
  }

  addCustomer(){

  }

  login(){

  }
}
