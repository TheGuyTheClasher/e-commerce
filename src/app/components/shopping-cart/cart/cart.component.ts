import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';
import { WishlistService } from 'src/app/services/wishlist.service';
import { WishCountService } from 'src/app/services/wish-count.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: any = [];

  cartItemNumber: number = 0;

  cartTotal: number = 0;

  wishlistItemNumber: number;


  constructor(private msg: MessengerService,
    private cartService: CartService,
    private wishlistService: WishlistService,
    private wishCountService: WishCountService) {
    this.cartItems = [];
  }

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems();
    this.calcWishlistItemNumber();
  }



  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    })
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calcCartTotal();
      this.calcCartItemNumber();
    })
  }

  // calculating the number of items in the CART, to show on the badge.
  calcCartItemNumber() {
    this.cartItemNumber = 0;
    this.cartItems.forEach(item => {
      this.cartItemNumber += item.qty;
    })
  }

  // calculating the number of items in the WISHLIST, to show on the badge.
  calcWishlistItemNumber() {
    this.wishCountService.totalWishlistNumber$.subscribe((itemCount) => {

      this.wishlistItemNumber = itemCount;
    })
  }

  calcCartTotal() {
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price);
    });
  }

  removeFromCart(item) {

    this.cartService.removeProductFromCart(item).subscribe(() => {
      this.loadCartItems();
    })
  }

  // empty cart.
  emptyCartRequest() {

  }

}
