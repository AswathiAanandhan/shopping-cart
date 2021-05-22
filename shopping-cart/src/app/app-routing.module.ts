import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './shoppingcart/cart/cart.component';
import { FilterComponent } from './shoppingcart/filter/filter.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';

const routes: Routes = [
  { path: 'login' , component:LoginComponent},

  { path: 'register', component: RegisterComponent},

  { path: 'HOME' , component:ShoppingcartComponent},

  { path: 'CART' , component:CartComponent },

  { path: 'FILTER' , component:FilterComponent },

  { path: '' , component:ShoppingcartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
