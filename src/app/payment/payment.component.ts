import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  isCard:boolean
  
  constructor(private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('type') == "card"){
      this.isCard = true
    }
  }

  complete(){
    alert("booking succesfull");
    this.router.navigate(['user-home'])
  }

}
