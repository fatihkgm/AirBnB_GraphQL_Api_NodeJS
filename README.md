# AirBnB_GraphQL_Api_NodeJS
📌 COMP 3133 – Full Stack Development II /  Creating AirBnB GraphQL API
⚪️  Instruction
    ✔️ Download the source code
    ✔️ npm install
    ✔️ npm start
    ✔️ Create an .env file and make your connections 
          PORT = 9999
          MONGODB_URL = mongodb+srv://<username>:<password>@cluster0.vfuyu.mongodb.net/<dataname>?retryWrites=true&w=majority

    ✔️ click or enter on browser  http://localhost:9999/graphql
    ✔️ add and try
      mutation {
         addHotel (
             hotel_name:"greenhotel",
             street:"STREET",
             city:"KINGSTON",
             postal_code:"N6DH5",
             price:1456,
             user_id:"2",
             email:"thekgb@kgm.com"
  					 )
         {
             hotel_name
             street
             city
          	postal_code
          price
          user_id
         }
         }
       
     ✔️ add and try  
     mutation {
     addBooking (
         booking_date:"19-12-2021",
         booking_start:"14-01-2022",
      	 booking_end:"17-01-2022",
         user_id: "5")
     {
      booking_date
      booking_start
      booking_end
      user_id
      
    }
    
}
      ✔️ Run the code on play icon
      ✔️ add 
         query { getHotel{ hotel_name street id } }

     ✔️ Check your Mongo collections and Enjoy it 😀

