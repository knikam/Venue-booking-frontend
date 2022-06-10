import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserHomeComponent } from './user-home/user-home.component';
import {HeaderComponent} from './header/header.component';
import { AddVenueComponent } from './add-venue/add-venue.component';
import { VenueBookingComponent } from './venue-booking/venue-booking.component';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component'

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserHomeComponent,
    HeaderComponent,
    AddVenueComponent,
    VenueBookingComponent,
    MyBookingComponent,
    CustomerInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
