import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductComponent } from './product/product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { GetProductListComponent } from './get-product-list/get-product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { Discount } from './discount.pipe';

@NgModule({
  declarations: [
    AppComponent,LoginComponent,Discount, SignupComponent, ProductComponent, NavbarComponent, 
    CarouselComponent, PostComponent, HomeComponent, CartComponent, CreateProductComponent, 
    GetProductListComponent, ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
