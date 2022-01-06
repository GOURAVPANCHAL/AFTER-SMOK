import { Component, Input, OnInit } from '@angular/core';
import { MainServiceService } from '../services/main-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public mainService: MainServiceService) { }

  // @Input() addProduct1 = new EventEmitter();
  cartArr: any = [];

  ngOnInit(): void {
    let list = JSON.parse(localStorage.getItem('products'));
    if (list != null && Array.isArray(list)) {
      this.cartArr = list
    }
    // console.log(this.addProduct1);

  }

  removeFromCart(index) {
    this.cartArr.splice(index, 1)
    console.log(this.cartArr)
    localStorage.removeItem('products')
    localStorage.setItem('products', JSON.stringify(this.cartArr))

    this.mainService.updateCart(this.cartArr.length)
  }


}
