import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { LocalStorageService } from '../local-storage.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Product[];

  constructor(
    private productService: ProductService,
    private localStorageService: LocalStorageService,
  ) { }

  ngOnInit() {
    this.products = this.initializeProductsInCart();
  }

  initializeProductsInCart() {
    let currentProductsInCart = new Array();
    let currentProductIdsInCart = this.localStorageService.getProductIdsInCart();
    for (let id of currentProductIdsInCart) {
      this.productService.getProductById(id)
        .subscribe(product => currentProductsInCart.push(product));
    }
    return currentProductsInCart;
  }

  clearCart() {
    this.localStorageService.clearCart();
    this.products = [];
  }

}
