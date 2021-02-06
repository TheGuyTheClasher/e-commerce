import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishCountService {

  subject = new Subject<number>()
  totalWishlistNumber$ = this.subject.asObservable();

  constructor() { }

  sendMessage(itemNumber: number) {
    this.subject.next(itemNumber); //triggering an event
  };

  // getMessage() {
  //   console.log('in wish count')
  //   return this.subject.asObservable();
  // };

}
