const { gql } = require('apollo-server-express');

exports.typeDefs = gql `
   type Hotel {
     id: ID!
     hotel_name: String!
     street: String!
     city: String!
     postal_code: String!
     price: Float!
     email: String!
   }

   type Booking {
    id: ID!
    date: String!
    creator: User!
    createdAt: String!
    updatedAt: String!
   }

   type User {
    id: ID!
    username:String!
    email: String!
    password: String!

   }





   type Query {
     getHotel: [Hotel]
     getUser: [User]
     getBooking:[Booking]
     getHotelByID(id: ID!): Hotel
     getHotelByCity(city: String!): [Hotel]
     getUserByID(id: ID!): User
     getBookingByID(id: ID!):
   }

   type Mutation {
     addHotel(hotel_name: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!): Hotel
     updateHotel(id: String!,
        hotel_name: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!): Hotel
     deleteHotel(id: ID!): Hotel
     addUser(username: String!
      email:String!
      password: String!): User
     addBooking(hotel: String!
      date:String!   
   }
`