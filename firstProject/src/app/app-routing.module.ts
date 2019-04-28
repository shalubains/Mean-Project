import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { SignupComponent } from './signup/signup.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GetProductListComponent } from './get-product-list/get-product-list.component';
import { CreateProductComponent } from "./create-product/create-product.component";
import { ProductDetailsComponent  } from "./product-details/product-details.component";

const routes: Routes = [
  {
    path: '', component: GetProductListComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'carousel', component: CarouselComponent
  },
  {
    path:'productListFromAPI', component : GetProductListComponent
  },
  {
    path:'createProduct', component: CreateProductComponent
  },
  {
    path:'product/:productid',component : ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
