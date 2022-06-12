import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareServiceService } from '../services/share-service.service';
import { VenueService } from '../services/venue/venue.service';

@Component({
  selector: 'app-available-venue',
  templateUrl: './available-venue.component.html',
  styleUrls: ['./available-venue.component.css']
})
export class AvailableVenueComponent implements OnInit {

  venues:any;
  isUser:boolean;

  constructor(private service:VenueService, private shareService : ShareServiceService, private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("role") == "User"){
      this.isUser = true;
    }
    this.getVenues()
  }

  getVenues(){
    this.service.getVenues()
    .subscribe(data=>{
      console.log(data)
      this.venues = data
    })
  }

  book(venue:any){
    this.shareService.sharingValue = venue;
    this.router.navigate(['venue-booking']);
  }
}
