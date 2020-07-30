import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private wishlistService: WishlistService
    ) { }

  wishlist: number[] = [];

  productList: Product[] = [];

  ngOnInit(): void {
    this.loadProduct();
    this.loadWishlist();
  }

  loadProduct(){
    this.productService.getProduct().subscribe( (product) => {
      this.productList = product;
    });
  }

  loadWishlist(){
    this.wishlistService.getWishlist().subscribe( (productsId) => {
      this.wishlist = productsId;
    })
  }
}
