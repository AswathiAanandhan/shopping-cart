const mongoose =require("mongoose");

mongoose.connect("mongodb://localhost:27017/shopping-server",{useNewUrlParser:true,
useUnifiedTopology: true})

const User = mongoose.model("User",{
    email:String,
     name:String, 
    password:String

})
module.exports = {
    User
}