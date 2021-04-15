import { TestBed } from '@angular/core/testing';

import { PizzaOrderApiService } from './pizza-order-api.service';

describe('PizzaOrderApiService', () => {
  let service: PizzaOrderApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaOrderApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
