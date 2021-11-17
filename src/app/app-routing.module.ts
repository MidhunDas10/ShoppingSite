import { LoginComponent } from './component/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
