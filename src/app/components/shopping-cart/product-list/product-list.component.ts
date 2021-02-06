import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';
import { WishlistService } from 'src/app/services/wishlist.service';
import { WishCountService } from 'src/app/services/wish-count.service';
import { Wishlist } from 'src/app/models/wishlist';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];
  wishlist: any[] = [];
  wishlistIdArray: number[] = [];

  wishlistItemNumber: number;


  constructor(private wishlistService: WishlistService,
    private productService: ProductService,
    private wishCountService: WishCountService) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadWishlist();
    this.getWishlistItemNumber();
  }


  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.productList = products;
    });
  }

  loadWishlist() {
    this.wishlistService.getWishlist().subscribe(productIds => {
      this.wishlist = productIds;
    })
  }

  getWishlistItemNumber() {
    this.wishlistService.getWishlist().subscribe((productIds: Wishlist[]) => {
      this.wishlistItemNumber = productIds.length;
      this.wishCountService.sendMessage(this.wishlistItemNumber)
    });
  }

}
