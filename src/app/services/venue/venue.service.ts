import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { venue } from 'src/app/_model/venue.model';

@Injectable({
  providedIn: 'root'
})
export class VenueService {

  private BASE_URL = "http://localhost:2001";

  constructor(private http:HttpClient) { }

  addVenue(venue:any){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.post(this.BASE_URL+"/addVenue",venue,httpOptions);
  }

  getVenues(){
    return this.http.get(this.BASE_URL+"/getVenue");
  }
}
