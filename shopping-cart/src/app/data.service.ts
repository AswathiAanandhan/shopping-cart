import { Injectable } from '@angular/core';
import { Product} from '../app/model/product'
import {HttpClient} from '@angular/common/http'
import {environment} from '../environments/environment'
//const options={
//  withCredentials:true
 //}  



@Injectable({
  providedIn: 'root'
})
export class DataService {

  products:Product[] = [
  
  new Product(1,"product 1","Women Solid Rayon Flared Kurta (Yellow)",600,"https://rukminim1.flixcart.com/image/800/960/kmjhw280/kurta/n/d/p/l-skyasia0012anarkaliyellow-skyasia-original-imagffaq6muvch73.jpeg?q=50",1),
  new Product(2,"product 2","Women Solid Rayon Flared Kurta (Pink)",499,"https://rukminim1.flixcart.com/image/495/594/kmjhw280/kurta/4/c/k/l-skyasia0012anarkalipink-skyasia-original-imagffaqha4tz3kj.jpeg?q=50",2),
  new Product(3,"product 3","Women Printed Rayon Flared Kurta  (White)",590,"https://rukminim1.flixcart.com/image/800/960/kcauaa80/kurta/w/e/v/l-pc-009-pariwar-original-imaftgqmb2psjzc6.jpeg?q=50",1),
  new Product(4,"product 4","Women Printed Rayon Flared Kurta  (Black)",800,"https://rukminim1.flixcart.com/image/800/960/kmqn3bk0/kurta/m/3/x/xl-k-w-123-glpj-black-maruti-handicrafts-original-imagfkrvdwxjwzjz.jpeg?q=50",2),
  new Product(5,"product 5","Women Embroidered Rayon Flared Kurta  (Blue)",550,"https://rukminim1.flixcart.com/image/800/960/khavrm80-0/kurta/z/v/x/m-mor-523-shinoy-original-imafxcetzrbq9z7y.jpeg?q=50",1),
  new Product(6,"product 6","Women Printed Rayon Flared Kurta  (Dark Blue)",600,"https://rukminim1.flixcart.com/image/800/960/kg15ocw0-0/kurta/t/u/z/xl-chjfk02-clothing-house-original-imafwc6u5peqfh5z.jpeg?q=50",2),
  new Product(7,"product 7","Women Floral Print Rayon Flared Kurta  (Green)",699,"https://rukminim1.flixcart.com/image/800/960/kiulxu80-0/kurta/p/3/x/l-kim670blue-kimayra-original-imafyjrtvugspgnp.jpeg?q=50",1),

]


  constructor() { }
    getProducts(): Product []{
      return this.products
    }
  }

    
  