import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import{user} from '../../_model/user.model'
import { dealer } from 'src/app/_model/dealer.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL = "http://localhost:2001";

  constructor(private http:HttpClient, private router:Router) { }

  adduser(user:user){
    return this.http.post(this.BASE_URL+"/addUser",user);
  }

  login(authUser:any){
      return this.http.post(this.BASE_URL+"/authenticate",authUser);
  }

  addDealer(dealer:dealer){
    return this.http.post(this.BASE_URL+"/addDealer",dealer);
  }

  loginDealer(userName:string, userPassword:string){
    return this.http.post(this.BASE_URL+"/auth?username="+userName+"&password="+userPassword,{});
}

}
