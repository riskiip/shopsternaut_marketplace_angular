import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }

  products: Product[] = [
    new Product(1, 'Asus ROG', 'Laptop Gaming Asus', 456),
    new Product(2, 'Lenovo Yoga', 'Laptop Gaming Lenovo', 123),
    new Product(3, 'Acer Predator', 'Laptop Gaming Acer', 789),
  ];

  getProduct(): Product[]{
    return this.products;
  }
}
