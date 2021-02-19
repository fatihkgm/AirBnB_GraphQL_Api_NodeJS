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
    type User {
      username: String!
      useremail: String!
      password: String!
    }
    type Booking {
     book: [User !]
     creator:[User !]
     
     date:String
     

      
    }
    type Query {
      getHotel: [Hotel]
      getUser:[User]
      getBooking:[Booking]
      getHotelByID(id: ID!): Hotel
      getHotelByCity(city: String!): [Hotel]
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
      addUser(
         username: String!
         useremail: String!
         password: String!):User
      addBooking(
         date:String):Booking  
    }
 ` 