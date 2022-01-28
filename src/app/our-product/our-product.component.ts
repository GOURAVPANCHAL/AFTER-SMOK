import { Component, OnInit, Output } from '@angular/core';
import { MainServiceService } from '../services/main-service.service';
import * as AOS from 'aos';


@Component({
  selector: 'app-our-product',
  templateUrl: './our-product.component.html',
  styleUrls: ['./our-product.component.css']
})
export class OurProductComponent implements OnInit {

  // @Output() addProduct1 = new EventEmitter()
  cartArr = [];
  productList = [
    { img: 'assets/images/1.png', url: 'after-smoke', heading: 'After-Smoke liquid to quit stop smoking and tobacco habit Ayurvedic liquid (30ml)', desc: `M.R.P.:₹450` },
    {
      img: 'assets/images/2.png', url: 'wellness', heading: 'After-Smoke liquid to quit stop smoking and tobacco habit Ayurvedic liquid (60ml)', desc: `M.R.P.:₹350  You Save:	₹35.00 (9%)
    Inclusive of all taxes`  },
    { img: 'assets/images/3.png', url: 'wellness-new0', heading: 'After-Smoke liquid to quit stop smoking and tobacco habit Ayurvedic liquid (90ml)', desc: `M.R.P.:₹550` },
    { img: 'assets/images/4.png', url: 'wellness-new1', heading: 'After-Smoke liquid to quit stop smoking and tobacco habit Ayurvedic liquid (150ml)', desc: `M.R.P.:₹650` },
    { img: 'assets/images/5.png', url: 'wellness-new2', heading: 'After-Smoke liquid to quit stop smoking and tobacco habit Ayurvedic liquid (200ml)', desc: `M.R.P.:₹750` }

  ]
  constructor(public mainService: MainServiceService) { }
  ngOnInit(): void {
    AOS.init();

  }

  addProduct(i) {
    localStorage.removeItem('products');
    let product = this.productList[i]

    this.cartArr.push(product)
    localStorage.removeItem('products');
    localStorage.setItem('products', JSON.stringify(this.cartArr))

    this.mainService.updateCart(this.cartArr.length)
    // this.addProduct1.emit(JSON.stringify(this.cartArr));
  }
}
