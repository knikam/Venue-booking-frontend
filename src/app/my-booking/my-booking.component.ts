import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking/booking.service';
import { ShareServiceService } from '../services/share-service.service';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.css']
})
export class MyBookingComponent implements OnInit {

  booking:any

  constructor(private service:BookingService) { }

  ngOnInit(): void {
   this.getBooking()
  }

  getBooking(){
    this.service.getBooking(localStorage.getItem('user') || "{}")
    .subscribe(data=>{
      this.booking = data;
      console.log(data)
    })
    
  }
}
