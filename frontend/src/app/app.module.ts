import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


import {FormsModule} from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { HotelsComponent } from './hotels/hotels.component';
import { BookingComponent } from './booking/booking.component';
import { AddhotelComponent } from './addhotel/addhotel.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    AboutComponent,
    HomeComponent,
    RegistrationComponent,
    HotelsComponent,
    BookingComponent,
    AddhotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
