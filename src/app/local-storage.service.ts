import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

const STORAGE_KEY_CART = 'cart';

const STORAGE_KEY_WATCHLIST = 'watchlist';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {


  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public storeProductIdInCart(productId: number) {
    const currentCart = this.storage.get(STORAGE_KEY_CART) || [];
    currentCart.push(productId);
    this.storage.set(STORAGE_KEY_CART, currentCart);
  }

  public getProductIdsInCart() {
    return this.storage.get(STORAGE_KEY_CART) || [];
  }

  public clearCart() {
    this.storage.remove(STORAGE_KEY_CART);
  }

  public storeProductIdInWatchlist(productId: number) {
    const currentWatchlist = this.storage.get(STORAGE_KEY_WATCHLIST) || [];
    currentWatchlist.push(productId);
    this.storage.set(STORAGE_KEY_WATCHLIST, currentWatchlist);
  }

  getProductIdsInWatchlist() {
    return this.storage.get(STORAGE_KEY_WATCHLIST) || [];
  }
  clearWatchlist() {
    this.storage.remove(STORAGE_KEY_WATCHLIST);
  }
}
