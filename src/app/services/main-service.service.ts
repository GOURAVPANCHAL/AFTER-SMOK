import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  cartCount = new BehaviorSubject(0)
  constructor() {
    if (localStorage.getItem('products')) {
      this.cartCount.next(JSON.parse(localStorage.getItem('products')).length)
    }
  }

  updateCart(val) {
    this.cartCount.next(val)
  }
}
