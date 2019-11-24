import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { LocalStorageService } from '../local-storage.service';
import { ProductService } from '../product.service';
import { MessageService } from '../message.service';

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
    private messageService: MessageService,

  ) { }

  ngOnInit() {
    this.products = this.getCurrentProductsInCart();
  }

  getCurrentProductsInCart(): Product[] {
    let currentProductsInCart: Product[] = new Array();
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

  purchaseCart() {
    let currentProductsInCart: Product[] = this.getCurrentProductsInCart();
    this.messageService.add('You hypothetically purchased: ', 5000);
    let message: string = '';

    for (let product of currentProductsInCart) {
      let message: string = '';
      message += 'Name: ';
      message += product.name;
      message += ', Price: ';
      message += product.price;
      this.messageService.add(message, 5000);
    }

    this.clearCart();
  }

}
