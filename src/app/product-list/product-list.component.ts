import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../mock-products';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  allProducts = PRODUCTS;

  selectedProduct: Product;
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  constructor() { }

  ngOnInit() {
  }

}
