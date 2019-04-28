import { Component } from '@angular/core';
import { productsData } from './products'
import { postData } from './posts'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // abc = {
  //   name : 'App Component',
  //   price : '1000',
  //   description : 'This is from app.component.ts'
  // }
  //products.js file usage


  products = productsData;
  posts = postData;
  title = 'firstProject';
}
