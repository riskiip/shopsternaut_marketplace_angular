import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { wishlistUrl } from '../config/api';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  getWishlist() {
    return this.http.get(wishlistUrl).pipe(
      map( (result: any[]) => {
        let productsId = [];
        result.forEach(item => productsId.push(item.id));
        return productsId;
      } )
    );
  }

  addToWishlish(productId) {
    return this.http.post(wishlistUrl, { id: productId });
  }

  removeFromWishlist(productId) {
    return this.http.delete(wishlistUrl + '/' + productId);
  }
}
