import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  ProductDetailId: string;
  product: any;
  productList = [
    { img: 'assets/images/1.png', url: 'after-smoke', heading: 'After-Smoke liquid to quit stop smoking and tobacco habit Ayurvedic liquid (30ml)', desc: `Price: (₹400)` },
    { img: 'assets/images/2.png', url: 'wellness', heading: 'WELLNESS', desc: `Collagen Powder (16 oz) $39.99 ($0.89/dose)` },
    { img: 'assets/images/3.png', url: 'wellness-new0', heading: 'WELLNESS New0', desc: `Collagen Powder (16 oz) $39.99 ($0.89/dose)` },
    { img: 'assets/images/4.png', url: 'wellness-new1', heading: 'WELLNESS New1', desc: `Collagen Powder (16 oz) $39.99 ($0.89/dose)` },
    { img: 'assets/images/5.png', url: 'wellness-new2', heading: 'WELLNESS New2', desc: `Collagen Powder (16 oz) $39.99 ($0.89/dose)` }



  ]
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ProductDetailId = this.route.snapshot.params['id'];
    console.log(this.ProductDetailId)


    this.product = this.productList.find(x => x.url == this.ProductDetailId);

  }

  addProduct(i) {
    let product = this.productList[i]
    localStorage.removeItem('products');

    this.product.push(product)
    // localStorage.removeItem('products');
    // localStorage.setItem('products', JSON.stringify(this.ProductDetailId))
    // this.ProductDetailId.emit(JSON.stringify(this.ProductDetailId));
  }
}


