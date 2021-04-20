# AirBnB_GraphQL_Api_NodeJS
📌 COMP 3133 – Full Stack Development II /  Creating AirBnB GraphQL API
![ban](https://i.ibb.co/pvsjRkm/Clean-Work-Table-Linked-In-Banner.png)
⚪️  Instruction
    ✔️ Download the source code
    ✔️ npm install
    ✔️ npm start
    ✔️ Create an .env file and make your connections 
          PORT = 9999
          MONGODB_URL = mongodb+srv://<username>:<password>@cluster0.vfuyu.mongodb.net/<dataname>?retryWrites=true&w=majority
 <h2 align="center">📌 COMP 3133 – Full Stack Development II /  Creating AirBnB GraphQL API👋</h2>




<p align="center">
<img src="https://img.shields.io/badge/graphql%20-%23F05033.svg?&style=for-the-badge&logo=graphql&logoColor=white"/>
<img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/> 
<img src="https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/>
<img src="https://img.shields.io/badge/nodejs%20-%23323330.svg?&style=for-the-badge&logo=nodejs&logoColor=white"/>
</p>
⚪️  Instruction
    ✔️ Download the source code
    ✔️ npm install
    ✔️ npm start
    ✔️ Create an .env file and make your connections 
          PORT = 9999
          MONGODB_URL = mongodb+srv://<username>:<password>@cluster0.vfuyu.mongodb.net/<dataname>?retryWrites=true&w=majority
    
   
 ![ezgif com-video-to-gif](https://user-images.githubusercontent.com/63836841/108565746-3521b700-72d3-11eb-9f47-ebaa4e9be889.gif)

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
        
   
 ![ezgif com-video-to-gif](https://user-images.githubusercontent.com/63836841/108565746-3521b700-72d3-11eb-9f47-ebaa4e9be889.gif)

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
     
    

