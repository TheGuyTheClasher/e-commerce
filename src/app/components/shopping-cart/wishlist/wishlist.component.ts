import { Component, OnInit } from '@angular/core';
import { Wishlist } from 'src/app/models/wishlist';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishlistItem: Wishlist[] = [];

  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.loadWishlistItems();
  }

  loadWishlistItems() {
    this.wishlistService.getWishlistToPage().subscribe((item) => {
      this.wishlistItem = item;
    })
  }

  removeFromWishlistPage(id) {
    this.wishlistService.removeFromWishlist(id).subscribe(() => {
      this.loadWishlistItems();
    })
  }

}
