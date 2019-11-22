import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Product } from '../product';


import { ProductService } from '../product.service';
import { CategoryToProductsMap } from '../mock-products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  allProducts: CategoryToProductsMap;
  products: Product[];

  selectedProduct: Product;
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) =>
        this.productService.getProductsById(params.get('id'))
          .subscribe(products => this.products = products));

  }
  /*
    getProductsById(urlParams: ParamMap): void {
      this.productService.getProductsById(urlParams.get('id'))
       .subscribe(products => this.products = products));
    }*/

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.allProducts = products);
  }
}
