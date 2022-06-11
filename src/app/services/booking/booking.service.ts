import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

  private BASE_URL = "http://localhost:2001";

  addBooking(booking:any){
    let headers = new HttpHeaders()
    .set('Authorization', 'Bearer '+localStorage.getItem("token"))
    .set('Content-Type', 'application/json')
    
    return this.http.post(this.BASE_URL+"/addBooking",booking,{headers})
  }

  getBooking(user:any){

    let headers = new HttpHeaders()
    .set('Authorization', 'Bearer '+localStorage.getItem("token"))
    .set('Content-Type', 'application/json')

    return this.http.post(this.BASE_URL+"/getBooking?user=",user,{headers});
  }
}
