import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareServiceService } from '../services/share-service.service';
import { VenueService } from '../services/venue/venue.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(private service:VenueService, private shareService : ShareServiceService, private router:Router) { }

  ngOnInit(): void {

  }

  

}
