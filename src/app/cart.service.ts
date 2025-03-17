import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any[] = [];
  
  constructor() { 
   // Load cart data from localStorage when service initializes
   const storedCart = localStorage.getItem('cart');
   if (storedCart) {
     this.items = JSON.parse(storedCart);
   }
  }
  //new
  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  add(productItem: any) {
    this.items.push(productItem);
    //new
    this.saveCart();
  }

  remove(cart: any) {
    this.items = this.items.filter(item => item.id !== cart)
  }

  total() {
    return this.items.reduce((total, items) => total + items.price, 0)
  }

  list() {
    return this.items;
  }

  
  
}
