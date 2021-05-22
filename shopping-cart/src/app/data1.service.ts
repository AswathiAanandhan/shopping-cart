import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data1Service {
  details:any={
    1:{email:"aswathi@gmail.com",name:"aswathi",password:'1111'},
    2:{email:"vishnu@gmail.com",name:"vishnu",password:'2222'},
    3:{email:"vismaya@gmail.com",name:"vismaya",password:'3333'}
}
 
currentUser:any;

  constructor(private http:HttpClient) { 
    this.getDetails();
  }

  saveDetails(){
    localStorage.setItem("details",JSON.stringify(this.details))
    if (this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }
  }

  getDetails(){
    if(localStorage.getItem("details")){
      this.details=JSON.parse(localStorage.getItem("details")||'')
    }
    if(localStorage.getItem("currentUser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')
  }
}

   



  register(email:any,name:any,password:any){
    const data ={
      email,
      name,
      password
    }
    //return this.http.post(environment.apiUrl+"/register",data)
    return this.http.post('http://localhost:2000/register',data)

  
}
login(email:any,password:any){
  const data ={
    email,
    password
  }
  //return this.http.post(environment.apiUrl+"/login",data)
  return this.http.post('http://localhost:2000/login',data)

}
}

