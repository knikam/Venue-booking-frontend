import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  user:any
  role:boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}')
    console.log(this.user)
    if(localStorage.getItem('role') == "Dealer"){
      this.role = false
    }
  }

}
