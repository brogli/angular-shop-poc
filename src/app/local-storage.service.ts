import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

const STORAGE_KEY_CART = 'cart';

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
}
