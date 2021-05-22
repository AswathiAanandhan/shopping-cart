import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Data1Service} from '../data1.service'
import { Router} from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = "";
  name ="";
  pswd = "";


  registerForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    name :['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    pswd :['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  constructor(private Data1Service:Data1Service,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
     
    if (this.registerForm.valid){
      this. Data1Service.register(this.registerForm.value.email,this.registerForm.value.name,this.registerForm.value.pswd)
      .subscribe((data:any)=>{
        if(data){
          alert("registration succesfull.please login");
        
          this.router.navigateByUrl("login");
        }
      },(data)=>{
        alert(data.error.message);
      }) 
       
      
       
     }
     else{
       alert("invalid")
     }
  }

}
