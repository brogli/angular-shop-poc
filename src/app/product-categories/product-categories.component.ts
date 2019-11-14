import { Component, OnInit } from '@angular/core';
import { PRODUCTCATEGORIES } from '../mock-product-categories';
import { ProductCategory } from '../product-category';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {

  productCategories = PRODUCTCATEGORIES;

  selectedProductCategory: ProductCategory;
  onSelect(productCategory: ProductCategory): void {
    this.selectedProductCategory = productCategory;
  }

  constructor() { }

  ngOnInit() {
  }

}
