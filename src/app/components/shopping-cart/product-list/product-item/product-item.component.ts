import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from '../../../../services/messenger.service';
import { CartService } from '../../../../services/cart.service';
import { WishlistService } from '../../../../services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor(
    private msg: MessengerService,
    private cartService: CartService,
    private wishlistService: WishlistService) { }

  @Input() productItem: Product;
  addedToWishlist: boolean = false;

  ngOnInit(): void {
  }

  handleAddToCart(){
    this.cartService.addProductToCart(this.productItem).subscribe( () => {
      this.msg.sendMsg(this.productItem);
    });
  }

  handleAddToWishlist(){
    return this.wishlistService.addToWishlish(this.productItem.id).subscribe( () => {
      this.addedToWishlist = true;
    });
  }

  handleRemoveFromWishlist(){
    return this.wishlistService.removeFromWishlist(this.productItem.id).subscribe( () => {
      this.addedToWishlist = false;
    });
  }
}
