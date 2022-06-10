import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVenueComponent } from './add-venue/add-venue.component';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { VenueBookingComponent } from './venue-booking/venue-booking.component';

const routes: Routes = [
  {path:'user-login',component:UserLoginComponent},
  {path:'user-home', component:UserHomeComponent},
  {path:'add-venue', component:AddVenueComponent},
  {path:'venue-booking', component:VenueBookingComponent},
  {path:'my-booking', component:MyBookingComponent},

  { path: '',   redirectTo: '/user-home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
