const express=require('express');
const session = require('express-session');

const dataService=require('./services/data.service')

const cors=require('cors');

const app=express();

app.use(cors({
    origin:"http://localhost:4200",
    credentials:true
}))
app.use(session({
    secret:'randomsecurestring',
    resave:false,
    saveUninitialized:false
    
}))
const authMiddleware = (req,res,next)=> {
    if(!req.session.currentUser){
        return res.json({
          status:false,
           statusCode:401,
          message:"please login"
          
   } )

      }
      else{
          next()
      }

}
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("hloo")
})

app.post('/register',(req,res)=>{
    
    dataService.register(req.body.email,req.body.name,req.body.password)
     .then(result=>{
         res.status(result.statusCode).json(result)
     })
 })
 app.post('/login',(req,res)=>{
    
    dataService.login(req,req.body.email,req.body.password)
    .then(result=>{
     res.status(result.statusCode).json(result)
})
})

app.listen(2000,()=>{
    console.log("server started at 3000");
})