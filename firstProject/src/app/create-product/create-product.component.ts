import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  name
  price
  quantity
  seller
  brand
  category
  ratings
  reviews
  image
  description

  disableButton
  constructor(private http: HttpClient,private router: Router) {
    this.disableButton = false;
  }

  createproduct() {
    //var url = "https://learningmeanwithashu.herokuapp.com/api/createproduct";
    var url = "http://localhost:5000/createProduct";
    this.http.post(url, {
      name: this.name, price: this.price, brand: this.brand, description: this.description, ratings: this.ratings,
      image: this.image, quantity: this.quantity, seller: this.seller, reviews: this.reviews, category: this.category,
      owner: {
        email: localStorage.getItem('email'),
        name: localStorage.getItem('name')
      }
    })
      .subscribe((response) => {
        this.disableButton = true;
        console.log("Product added successfully : " + response["data"])
        alert(response["message"])
        this.router.navigate(['/productListFromAPI'])
      }, (error) => {
        console.log("Error : ", error)
      })
  }

  ngOnInit() {
  }

}
