import { Product } from './product';

interface ProductsToCategories {
  [key: string]: Product[];
}

export const PRODUCTS: ProductsToCategories = {
  "PRODUCTS_CAT1":
    [
      { id: 11, name: 'Product 1 of category 1', description: 'This is a product description.' },
      { id: 12, name: 'Product 2 of category 1', description: 'This is a product description.' },
      { id: 13, name: 'Product 3 of category 1', description: 'This is a product description.' },
      { id: 14, name: 'Product 4 of category 1', description: 'This is a product description.' },
    ]
  ,
  "PRODUCTS_CAT2":
    [
      { id: 15, name: 'Product 1 of category 2', description: 'This is a product description.' },
      { id: 16, name: 'Product 2 of category 2', description: 'This is a product description.' },
      { id: 17, name: 'Product 3 of category 2', description: 'This is a product description.' },
      { id: 18, name: 'Product 4 of category 2', description: 'This is a product description.' },
    ]
  ,
  "PRODUCTS_CAT3":
    [
      { id: 19, name: 'Product 1 of category 3', description: 'This is a product description.' },
      { id: 20, name: 'Product 2 of category 3', description: 'This is a product description.' },
      { id: 21, name: 'Product 3 of category 3', description: 'This is a product description.' },
      { id: 22, name: 'Product 4 of category 3', description: 'This is a product description.' },
    ]
  ,
  "PRODUCTS_CAT4":
    [
      { id: 23, name: 'Product 1 of category 4', description: 'This is a product description.' },
      { id: 24, name: 'Product 2 of category 4', description: 'This is a product description.' },
      { id: 25, name: 'Product 3 of category 4', description: 'This is a product description.' },
      { id: 26, name: 'Product 4 of category 4', description: 'This is a product description.' },
    ]
  ,
}
