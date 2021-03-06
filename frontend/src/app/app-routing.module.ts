import { RegistrationComponent } from './registration/registration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { LogoutComponent } from './logout/logout.component'
import { AboutComponent } from './about/about.component'
import { HotelsComponent } from './hotels/hotels.component';
import { BookingComponent } from './booking/booking.component';
import { AddhotelComponent } from './addhotel/addhotel.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent,canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'about', component: AboutComponent},
  { path: 'booking' , component: BookingComponent},
  { path: 'hotel', component: HotelsComponent},
  {path: 'registration' , component: RegistrationComponent},
  { path: 'logout', component: LogoutComponent},
  {path: 'addhotel' , component: AddhotelComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
