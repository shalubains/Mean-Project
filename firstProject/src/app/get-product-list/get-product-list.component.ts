import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CommonService } from '../common.service';

@Component({
  selector: 'app-get-product-list',
  templateUrl: './get-product-list.component.html',
  styleUrls: ['./get-product-list.component.css']
})
export class GetProductListComponent implements OnInit {

  products
  constructor(private http: HttpClient, private cs: CommonService) {
    // if (this.cs.products.length <= 0) {
    //   // var url = "https://learningmeanwithashu.herokuapp.com/api/allproducts";
    //   var url = "http://localhost:5000/getAllProduct";
    //   this.http.get(url).subscribe((response) => {
    //     this.products = response["data"];
    //     this.cs.products = response["data"];
    //     console.log("response : ", response["data"]);
    //   }, (error) => {
    //     console.log("error : ", error);
    //   })
    // }
    // else {
    //   this.products = this.cs.products
    // }


  }

  ngOnInit() {
    var url = "http://localhost:5000/getAllProduct";
      this.http.get(url).subscribe((response) => {
        this.products = response["data"];
        this.cs.products = response["data"];
        console.log("response : ", response["data"]);
      }, (error) => {
        console.log("error : ", error);
      })
      
  }

}
