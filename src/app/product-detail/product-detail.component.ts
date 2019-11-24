import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) =>
        this.productService.getProductById(+params.get('id'))
          .subscribe(product => this.product = product));

  }

}
