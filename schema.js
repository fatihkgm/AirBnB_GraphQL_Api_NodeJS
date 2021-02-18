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

   type Query {
     getHotel: [Hotel]
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
   }
`