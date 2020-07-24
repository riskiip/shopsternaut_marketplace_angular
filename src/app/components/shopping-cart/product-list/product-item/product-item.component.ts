import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from '../../../../services/messenger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor(private msg: MessengerService) { }

  @Input() productItem: Product;

  ngOnInit(): void {
  }

  handleAddToCart(){
    this.msg.sendMsg(this.productItem);
  }

}
