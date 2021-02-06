import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;
  @Input() addedToWishlist: boolean;

  @Output() wishlistCounter = new EventEmitter;

  viewDetails: boolean = false;


  constructor(private msg: MessengerService, private cartService: CartService, private wishlistService: WishlistService) { }

  ngOnInit(): void {
  }

  addToCartHandler() {
    this.cartService.addProductToCart(this.productItem).subscribe(() => {
      this.msg.sendMsg(this.productItem);
    })
  }

  handleAddToWishlist() {
    this.wishlistService.addToWishlist(this.productItem).subscribe(() => {
      this.updateWishlistCounter();
      this.addedToWishlist = true;
    })
  }

  handleRemoveFromWishlist() {
    this.wishlistService.removeFromWishlist(this.productItem.id).subscribe(() => {
      this.updateWishlistCounter();
      this.addedToWishlist = false;
    })
  }

  toggleViewDetails() {
    this.viewDetails = !this.viewDetails;
  }

  updateWishlistCounter() {
    this.wishlistCounter.emit();
  }

}
