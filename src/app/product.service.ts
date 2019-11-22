import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { CategoryToProductsMap } from './mock-products';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProductsById(id: string): Observable<Product[]> {
    console.log('fetched id ' + id);
    console.log('products is: ' + PRODUCTS[id]);
    return of(PRODUCTS[id]);
  }

  constructor(private messageService: MessageService) { }

  getProducts(): Observable<CategoryToProductsMap> {
    // TODO: send the message _after_ fetching the products
    this.messageService.add('ProductService: fetched products');
    return of(PRODUCTS);
  }
}
