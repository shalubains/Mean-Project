import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  username 
  email
  password
  cartItems = []
  products =[]
  productDetail
  constructor() { }
}
