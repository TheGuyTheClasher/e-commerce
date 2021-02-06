import { Injectable } from '@angular/core';
import { wishlistUrl } from 'src/app/config/api';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {


  constructor(private http: HttpClient) { }

  addToWishlist(productItem) {
    return this.http.post(wishlistUrl, { id: productItem.id, product: productItem });
  }


  removeFromWishlist(productId) {
    return this.http.delete(wishlistUrl + '/' + productId);
  }

  getWishlistToLoad() {
    return this.http.get(wishlistUrl);
  }


  getWishlist() {
    return this.http.get(wishlistUrl).pipe(
      map((result: any[]) => {
        let productIds = [];

        result.forEach(item => {
          productIds.push(item.id)
        })
        return productIds;
      })
    )
  }

  getWishlistToPage() {
    return this.http.get(wishlistUrl).pipe(
      map((result: any[]) => {
        let wishlistItems = [];

        result.forEach(item => {
          wishlistItems.push(item.product)
        })
        return wishlistItems;
      })
    )
  }
}
