import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private productService: ProductService,
    private messageService: MessageService,
    private localStorageService: LocalStorageService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) =>
        this.productService.getProductById(+params.get('id'))
          .subscribe(product => this.product = product));

  }

  saveProductIdToCart(productId: number) {
    this.localStorageService.storeProductIdInCart(productId);
    this.messageService.add('Saved to cart: Product with ID ' + productId);
  }

  saveProductIdToWatchlist(productId: number) {
    this.localStorageService.storeProductIdInWatchlist(productId);
    this.messageService.add('Saved to watchlist: Product with ID ' + productId);
  }
}
