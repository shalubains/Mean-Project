import { Component, OnInit } from '@angular/core';
import { productsData } from "../products";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = productsData
  constructor() { }

  ngOnInit() {
  }

}
