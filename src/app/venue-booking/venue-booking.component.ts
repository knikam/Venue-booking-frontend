import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookingService } from '../services/booking/booking.service';
import { ShareServiceService } from '../services/share-service.service';

@Component({
  selector: 'app-venue-booking',
  templateUrl: './venue-booking.component.html',
  styleUrls: ['./venue-booking.component.css']
})
export class VenueBookingComponent implements OnInit {

  venueForm : FormGroup
  venue:any
  
  constructor(private shareService:ShareServiceService, private service:BookingService) { }

  ngOnInit(): void {
    this.venue = this.shareService.sharingValue;
    console.log(this.venue)
    this.venueForm = new FormGroup({
      date : new FormControl,
      venueType : new FormControl,
    })
  }

  addBooking(){
    console.log(this.venueForm.value);
    let booking = {
      "date" : this.venueForm.get('date')?.value,
      "venueType" : this.venueForm.get('venueType')?.value,
      "user": JSON.parse(localStorage.getItem("user") || "{}"),
      "venue":this.venue
    }

    console.log(booking)

    let res = this.service.addBooking(booking)
    res.subscribe(data=>{
      if(data){
        alert("Your venue is booked.")
      }else{
        alert("Failed to venue")
      }
    })
  }

}
