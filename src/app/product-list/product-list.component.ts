import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Product } from '../product';


import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) =>
        this.productService.getProductsById(+params.get('id'))
          .subscribe(products => this.products = products));

  }
}
