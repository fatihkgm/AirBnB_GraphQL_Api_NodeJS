import { Component, OnInit } from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookings: any[] = [];
  user: any[] = [];
  storedId: any;
  loading = true;
  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo.query<any>({
      query:gql `{getBookings {
        hotel_id
        booking_date
        booking_start
        booking_end
        user_id
      }}`
    })
    .subscribe(
      ({data,loading}) =>{
        this.user = data && data.getBookings;
        this.loading = loading;
        for (let b of this.user) {
          if (b.user_id == this.storedId) {
            this.bookings.push(b);
          }
        }
      }
    );
  }
}

