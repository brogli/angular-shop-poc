import { Injectable, KeyValueDiffers } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private messageService: MessageService) { }

  getProductById(id: number): Observable<Product> {
    let searchedProduct;
    for (let products of PRODUCTS.values()) {
      for (let product of products) {
        if (product.id == id) {
          searchedProduct = product;
        }
      }
    }
    return of(searchedProduct);
  }

  getProductsByCategoryId(categoryId: number): Observable<Product[]> {
    return of(PRODUCTS.get(categoryId));
  }

  getProducts(): Observable<Map<number, Product[]>> {
    // TODO: send the message _after_ fetching the products
    this.messageService.add('ProductService: fetched products');
    return of(PRODUCTS);
  }
}
