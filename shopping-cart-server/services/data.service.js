const db=require('./db');

let details={
    1:{email:"aswathi@gmail.com",name:"aswathi",password:'1111'},
    2:{email:"vishnu@gmail.com",name:"vishnu",password:'2222'},
    3:{email:"vismaya@gmail.com",name:"vismaya",password:'3333'}
}
let currentUser

const register = (email,name,password) =>{
    

  return db.User.findOne({
    email
  }).then(user=>{
    console.log(user);
    if (user){
    
      return{
       status:false,
       statusCode:422,
       message:"user already exist. please login"

   }
 }

 else {
   const newUser = new db.User({
     email,
     name,
     password
     
      
   });
   newUser.save();
 
    return {
       staus:true,
       statusCode:200,
       message:"registration succesful"
   }
  }
})
}
const login = (req,email1,password) =>{
  var email = parseInt(email1);
  console.log(email);
  console.log(password);
 return  db.User.findOne({
    email:email1,
    password

  }).then(user=>{
    if (user){
      req.session.currentUser= user.email
              
      return{

      
    status:true, 
    statusCode:200,
    message:"login succesfull",
    //name:user.name,
    //email:user.email
    }
  }
  else{
    return {
      status:false,
      statusCode:422,
      message:"incorrect credentials"

  }
  }
  })
}
module.exports = { 
    register,
    login
}