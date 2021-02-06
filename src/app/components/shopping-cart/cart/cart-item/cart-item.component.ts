import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem;

  @Output() removeItemFromCart = new EventEmitter;


  itemQty: number = 0;
  itemId: number;


  constructor() { }

  ngOnInit(): void {
  }

  removeFromCart(item) {
    this.removeItemFromCart.emit(item);

  }

}
