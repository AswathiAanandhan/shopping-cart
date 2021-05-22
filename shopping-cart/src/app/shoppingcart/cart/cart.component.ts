import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  
    

  

  constructor() { }

  ngOnInit(): void {
    
    this.CartDetails();
    this.loadCart();
    
  }
  getCartDetails:any=[];
  CartDetails(){
    if(localStorage.getItem('localCart')){
      this.getCartDetails=JSON.parse(localStorage.getItem('localCart')||'');
      console.log(this.getCartDetails);
      
       }
  }


  inc(id:any,quantity:any){
  
     for (let i=0; i<this.getCartDetails.length; i++) {
       if(this.getCartDetails[i].id===id){
         if(quantity!=6)
          this.getCartDetails[i].quantity=parseInt(quantity) + 1;
        
       }
      
    }
    localStorage.setItem('localCart',JSON.stringify(this.getCartDetails))
    this.loadCart();
  }


  dec(id:any,quantity:any){
    for (let i=0; i<this.getCartDetails.length;i++) {
      if(this.getCartDetails[i].id===id){
        if(quantity!=1)
          this.getCartDetails[i].quantity=parseInt(quantity) - 1;
        
      }
      
    }
    localStorage.setItem('localCart',JSON.stringify(this.getCartDetails))
    this.loadCart();
  }
 total:number=0
 loadCart(){
   if(localStorage.getItem('localCart')){
     this.getCartDetails=JSON.parse(localStorage.getItem('localCart')||'')
     this.total=this.getCartDetails.reduce(function(acc:any,val:any){
       return acc + (val.price * val.quantity);
     }, 0)
   }
 }


removeall(){
  localStorage.removeItem('localCart')
  this.getCartDetails=[];
  this.total=0;
}

  
    
}



