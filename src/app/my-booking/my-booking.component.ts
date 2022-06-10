import { Component, OnInit } from '@angular/core';
import { ShareServiceService } from '../services/share-service.service';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.css']
})
export class MyBookingComponent implements OnInit {

  venue:any
  constructor(private shareService:ShareServiceService) { }

  ngOnInit(): void {
    this.venue = this.shareService.sharingValue;
  }

  addBooking(){
    
  }
}
