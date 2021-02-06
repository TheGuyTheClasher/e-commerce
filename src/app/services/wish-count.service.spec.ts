import { TestBed } from '@angular/core/testing';

import { WishCountService } from './wish-count.service';

describe('WishCountService', () => {
  let service: WishCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
