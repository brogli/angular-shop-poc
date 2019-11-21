import { Component, OnInit } from '@angular/core';

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

  selectedProduct: Product;
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.allProducts = products);
  }


}
