import { LoginComponent } from './component/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import {NotFoundComponent} from './component/not-found/not-found.component';
const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path: '404', component: NotFoundComponent },
  {path: '**', redirectTo: '404' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
