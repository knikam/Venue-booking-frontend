import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  isAdmin:boolean=true;
  isUser:boolean=false;

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("role") == null){
      this.router.navigate(['user-login'])
    }else{
      if(localStorage.getItem("role") == "User"){
        this.isAdmin = false;
        this.isUser = true;
      }
    }
  }

  logout(){
    this.router.navigate(['user-login'])
    localStorage.clear();
  }

}
