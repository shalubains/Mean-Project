import { Component, OnInit } from '@angular/core';
import { CommonService } from "../common.service";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems
  cartPrice = 0
  constructor(private cs: CommonService, private http: HttpClient) {
    this.getCartProductList()
  }

  ngOnInit() {
  }

  getCartProductList() {
    this.cartPrice=0
    var url = "http://localhost:5000/getProductAddedInCart"
    var email = localStorage.getItem('email');
    this.http.post(url, { email: email }).subscribe((response) => {
      if (response["data"]) {
        this.cartItems = response["data"]
        this.cs.cartItems = response["data"]
        console.log("cart items", this.cs.cartItems)
        this.cs.cartItems.forEach(element => {
          this.cartPrice = this.cartPrice + element.product.price
        });
      }
    }, (error) => {
      alert("Some error occured.")
    })
  }


  ngDoCheck() {
  }

  removeProduct(product) {
    var url = "http://localhost:5000/removeProductFromCart"
    this.http.post(url, { email: localStorage.getItem('email'), cartId: product.cartId }).subscribe((response) => {
      if (response["data"]) {
        alert(response["message"])
        //Fetching cart product list
        this.getCartProductList()
      }
    }, (error) => {
      alert("An error occured while removing product.")
    })
  }
}
