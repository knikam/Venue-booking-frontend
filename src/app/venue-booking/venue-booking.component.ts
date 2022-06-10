import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-venue-booking',
  templateUrl: './venue-booking.component.html',
  styleUrls: ['./venue-booking.component.css']
})
export class VenueBookingComponent implements OnInit {

  venueForm : FormGroup
  
  constructor() { }

  ngOnInit(): void {
  }

}
