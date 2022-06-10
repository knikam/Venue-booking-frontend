import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';

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

  constructor(private service:UserService, private router:Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl,
      email: new FormControl,
      dateOfBirth: new FormControl,
      gender:new FormControl,
      loginId:new FormControl,
      userType:new FormControl,
      password: new FormControl
    })

    this.loginForm = new FormGroup({
      userName: new FormControl,
      userPassword: new FormControl,
      userType: new FormControl
    })

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
    if(this.registerForm.get('userType')?.value == "User"){
      let res = this.service.adduser(this.registerForm.value)
      res.subscribe(data=>{
          if(data){
              alert("User added successfully.")
              location.reload();
          }else{
            alert("Fail to add user")
          }
      });
    }else{
      let res = this.service.addDealer(this.registerForm.value)
      res.subscribe(data=>{
          if(data){
              alert("Dealer added successfully.")
              location.reload();
          }else{
            alert("Fail to add dealer")
          }
      });
    }
  }

  login(){
    let res = this.service.login(this.loginForm.value)
    if(this.loginForm.get('userType')?.value == "User"){
      res.subscribe(data=>{
        
        if(data){
          let resData = JSON.parse(JSON.stringify(data));

          localStorage.setItem("token",resData.jwtToken);
          localStorage.setItem("role",this.loginForm.get('userType')?.value);
          localStorage.setItem("user",JSON.stringify(resData.user));
  
          this.router.navigate(['user-home'])

        }else{
          alert("Please check username password")
        }
      },error=>{
          console.log(error.status)
          if(error.status == 404){
            alert("please check username")
          }else{
            alert("plaese check password")
          }
      });
    }else if(this.loginForm.get('userType')?.value == "Dealer"){
      let username =this.loginForm.get("userName")?.value;
      let password = this.loginForm.get("userPassword")?.value;

      let res = this.service.loginDealer(username,password);
      res.subscribe(data=>{
        if(data){
          localStorage.setItem("role",this.loginForm.get('userType')?.value);
          localStorage.setItem("user",JSON.stringify(data));
          this.router.navigate(['user-home'])
        }
      })
    }else{
      alert("Please select userType")
    }
  }
}
