import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { Data1Service } from '../data1.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "";
  pswd = "";

  loginForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    pswd :['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private router:Router,private Data1Service:Data1Service,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  getEmail(event:any){
    this.email=event.target.value;
    //console.log(this.email); 
  }
  pswdchange(event:any){
    this.pswd=event.target.value;
   // console.log(this.pswd);
    
  }
 
  login(){
    //alert("login succesful")
    if (this.loginForm.valid){
      var emailid=this.loginForm.value.email;
    console.log(emailid);
    
    var pswd=this.loginForm.value.pswd;
    console.log(pswd); 
    this.Data1Service.login(emailid,pswd)
        .subscribe((data:any)=>{
          if(data){
            alert(data.message);
          //  localStorage.setItem("name",data.name)
            
          }
        },(data)=>{
          alert(data.error.message);
        }) 
         
        
         
       }
       else{
         alert("invalid forms")
       }

  }

  }
