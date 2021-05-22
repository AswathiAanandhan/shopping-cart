import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/model/product';

 
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
 export class ProductItemComponent implements OnInit {
  

   @Input() productItem!: Product;
  

  constructor() { }

  ngOnInit(): void {
  }
  itemsCart:any=[]
  
  
 addCart(product:any){
   console.log(product);
   let cartDataNull=localStorage.getItem('localCart');
   if(cartDataNull==null){
     let storeData:any=[];
     storeData.push(product);
     localStorage.setItem('localCart',JSON.stringify(storeData))
   }
   else{
     var id=product.id;
     let index:number=-1; 
     this.itemsCart=JSON.parse(localStorage.getItem('localCart')||'');
     for(let i=0;i<this.itemsCart.length;i++){
        if(parseInt(id)===parseInt(this.itemsCart[i].id)){

       this.itemsCart[i].qty=product.qty;
       index=i;
       break;
     }
   }
  
    if(index == -1){
     this.itemsCart.push( product);
     localStorage.setItem('localCart',JSON.stringify(this.itemsCart))
   }
   else{
     localStorage.setItem('localCart',JSON.stringify(this.itemsCart))
   }
   
 }
 }
  }