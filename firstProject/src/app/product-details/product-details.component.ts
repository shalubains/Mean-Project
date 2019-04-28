import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product

  constructor(private cs: CommonService, private http: HttpClient, private route: ActivatedRoute) {
    this.product = this.route.snapshot.params.productid

    var url = "http://localhost:5000/getProductById";
    this.http.post(url, { productId: this.product }).subscribe((response) => {
      if (response["data"]) {
        this.product = response["data"][0]
      }
    })
  }

  ngOnInit() {
  }

}
