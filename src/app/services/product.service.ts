import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:3000/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  products: Product[] = [
    new Product(1, 'Asus ROG', 'Laptop Gaming Asus', 456),
    new Product(2, 'Lenovo Yoga', 'Laptop Gaming Lenovo', 123),
    new Product(3, 'Acer Predator', 'Laptop Gaming Acer', 789),
  ];

  getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(apiUrl);
  }
}
