import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VenueService } from '../services/venue/venue.service';

@Component({
  selector: 'app-add-venue',
  templateUrl: './add-venue.component.html',
  styleUrls: ['./add-venue.component.css']
})
export class AddVenueComponent implements OnInit {

  venueForm:FormGroup

  constructor(private router:Router, private service:VenueService) { }

  ngOnInit(): void {
    this.venueForm = new FormGroup({
      hall:new FormControl,
      auditorium:new FormControl,
      hotel:new FormControl,
      restaurants:new FormControl,   
    })
  }

  addVanue(){
    
    let dealer = JSON.parse(localStorage.getItem('user') || '{}')
    let venue = {
      "hall": this.venueForm.get('hall')?.value,
      "auditorium":this.venueForm.get('auditorium')?.value,
      "hotel": this.venueForm.get('hotel')?.value,
      "restaurants": this.venueForm.get('restaurants')?.value,
      "dealer":dealer
    }
    console.log(venue);

    let res = this.service.addVenue(venue);
    res.subscribe(data=>{
      if(data){
        alert("Venue added.")
        location.reload()
      }else{
        alert("Venue not added.")
      }
    })
  }
}
