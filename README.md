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
    ✔️ add 
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

      ✔️ Run the code on play icon
      ✔️ add 
         query { getHotel{ hotel_name street id } }

     ✔️ Check your Mongo collections and Enjoy it 😀

