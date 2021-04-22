import { Component, OnInit } from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  Bookings: any[] = [];
  loading = true;
  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo.query<any>({
      query:gql `{Booking{id booking_date booking_start booking_end}}`
    })
    .subscribe(
      ({data,loading}) =>{
        this.Bookings = data && data.Booking;
        this.loading = loading;
      }
    );
  }

}