import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from "../common.service";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product

  // @Input() name
  // @Input() price
  // @Input() description

  constructor(private cs: CommonService, private http: HttpClient, private router: Router) {

  }

  disableButton() {
    // console.log("Product list : ", this.cs.products)
    // console.log("cart items  : ", this.cs.cartItems)
    this.getCartProductList()
    this.cs.cartItems.forEach((elementCart) => {
      if (elementCart.productId == this.product.productId)
        this.product.disableBtn = true;
    })
  }

  ngOnInit() {
    // this.cs.cartItems.forEach(ele=>{
    //   if(ele.name==this.product.name){
    //    this.product.disableBtn = true;
    //   }
    // })
    this.disableButton()
  }

  addToCart() {
    var addProduct = {
      email: localStorage.getItem('email'),
      productId: this.product.productId,
      product: {
        quantity: 1,
        name: this.product.name,
        price: this.product.price,
        image: this.product.image
      }
    };
    this.cs.cartItems.push(this.product)
    this.product.disableBtn = true;
    // console.log(this.cs.cartItems)
    var url = "http://localhost:5000/addToCart";
    this.http.post(url, addProduct).subscribe((response) => {
      console.log(response['data'])
      alert(response['message'])
    }, (error) => {
      console.log("Error occured while calling API.")
    })

  }


  productDetails() {
    this.cs.productDetail = this.product
    var url = "/product/" + this.product.productId
    this.router.navigate([url])
  }



  getCartProductList() {
    var url = "http://localhost:5000/getProductAddedInCart"
    var email = localStorage.getItem('email');
    this.http.post(url, { email: email }).subscribe((response) => {
      if (response["data"]) {
        this.cs.cartItems = response["data"]
      }
    }, (error) => {
      alert("Some error occured.")
    })
  }
}
