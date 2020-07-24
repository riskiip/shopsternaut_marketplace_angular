import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  cartItems = [
    {id: 1, productId: 1, productName: 'Test 1', qty: 5, price: 1000},
    {id: 2, productId: 2, productName: 'Test 2', qty: 6, price: 2000},
    {id: 3, productId: 3, productName: 'Test 3', qty: 7, price: 3000},
    {id: 4, productId: 4, productName: 'Test 4', qty: 8, price: 4000},
    {id: 5, productId: 5, productName: 'Test 5', qty: 9, price: 5000},
    {id: 6, productId: 6, productName: 'Test 6', qty: 10, price: 5000},
    {id: 7, productId: 7, productName: 'Test 7', qty: 11, price: 12000},
  ];

  cartTotal = 0;

  ngOnInit(): void {
    this.cartItems.forEach(item => {
      this.cartTotal += item.qty * item.price;
    });
  }

}
