import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/app/data.service'
import { Product } from 'src/app/model/product'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[]=[]

  constructor(private DataService:DataService) { }

  ngOnInit(): void {
     this.productList=this.DataService.getProducts()
  }

}
