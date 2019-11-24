import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { LocalStorageService } from '../local-storage.service';
import { MessageService } from '../message.service';
import { Product } from '../product';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  currentProductsInWatchlist: Product[];

  constructor(
    private productService: ProductService,
    private localStorageService: LocalStorageService,
    private messageService: MessageService, ) { }

  ngOnInit() {
    this.currentProductsInWatchlist = this.getCurrentProductsInWatchlist();
  }

  getCurrentProductsInWatchlist(): Product[] {
    let currentProductsInWatchlist: Product[] = new Array();
    let currentProductIdsInWatchlist = this.localStorageService.getProductIdsInWatchlist();
    for (let id of currentProductIdsInWatchlist) {
      this.productService.getProductById(id)
        .subscribe(product => currentProductsInWatchlist.push(product));
    }
    return currentProductsInWatchlist;
  }

  clearWatchlist() {
    this.localStorageService.clearWatchlist();
    this.currentProductsInWatchlist = [];
  }

  addWatchListToCart() {
    for (let i = 0; i < this.currentProductsInWatchlist.length; i++) {
      this.localStorageService.storeProductIdInCart(this.currentProductsInWatchlist[i].id);
    }
    this.clearWatchlist();
    this.messageService.add('Saved watchlist items to cart and emptied watchlist.');
  }
}
