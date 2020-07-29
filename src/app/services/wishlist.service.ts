import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { wishlistUrl } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  addToWishlish(productId) {
    return this.http.post(wishlistUrl, { id: productId });
  }

  removeFromWishlist(productId) {
    return this.http.delete(wishlistUrl + '/' + productId);
  }
}
