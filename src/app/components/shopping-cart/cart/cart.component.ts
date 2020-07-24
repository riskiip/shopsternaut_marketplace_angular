import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../../../services/messenger.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private msg: MessengerService) { }

  cartItems = [
    // {id: 1, productId: 1, productName: 'Test 1', qty: 5, price: 1000},
    // {id: 2, productId: 2, productName: 'Test 2', qty: 6, price: 2000},
    // {id: 3, productId: 3, productName: 'Test 3', qty: 7, price: 3000},
    // {id: 4, productId: 4, productName: 'Test 4', qty: 8, price: 4000},
    // {id: 5, productId: 5, productName: 'Test 5', qty: 9, price: 5000},
    // {id: 6, productId: 6, productName: 'Test 6', qty: 10, price: 5000},
    // {id: 7, productId: 7, productName: 'Test 7', qty: 11, price: 12000},
  ];

  cartTotal = 0;

  ngOnInit(): void {
    this.msg.getMsg().subscribe((product: Product) => {
      this.addItemToChart(product);
    });
  }

  addItemToChart(product: Product){
    let productExists = false;

    for(let i in this.cartItems){
      if(this.cartItems[i].productId === product.id){
        this.cartItems[i].qty++;
        productExists = true;
        break;
      }
    }

    if(!productExists){
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      });
    }

    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += item.qty * item.price;
    });
  }
}
