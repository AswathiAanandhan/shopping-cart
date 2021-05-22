import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { NavComponent } from './nav/nav.component';
import { FilterComponent } from './shoppingcart/filter/filter.component';
import { ProductListComponent } from './shoppingcart/product-list/product-list.component';
import { CartComponent } from './shoppingcart/cart/cart.component';
import { ProductItemComponent } from './shoppingcart/product-list/product-item/product-item.component';
import { CartItemComponent } from './shoppingcart/cart/cart-item/cart-item.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    ShoppingcartComponent,
    NavComponent,
    FilterComponent,
    ProductListComponent,
    CartComponent,
    ProductItemComponent,
    CartItemComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
