import { Injectable } from '@angular/core';
import { PizzaOrderApiService } from './pizza-order-api/pizza-order-api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  apiRespondsWithFailure,
  apiRespondsWithSuccess,
  pizzaFeatureSelector,
  userClicksOrderNow,
} from './pizza.store';
import { select, Store } from '@ngrx/store';
import { switchMap, map, concatMap, take } from 'rxjs/operators';

@Injectable()
export class PizzaApiEffects {
  constructor(
    private pizzaOrderApiService: PizzaOrderApiService,
    private actions: Actions,
    private store: Store
  ) {}

  makeRequest = createEffect(() =>
    this.actions.pipe(
      ofType(userClicksOrderNow),
      concatMap(() => this.store.pipe(select(pizzaFeatureSelector), take(1))),
      switchMap((pizzaState) =>
        this.pizzaOrderApiService
          .sendPizzaOrderRequest(pizzaState)
          .pipe(
            map((response) =>
              response.result === 'success'
                ? apiRespondsWithSuccess()
                : apiRespondsWithFailure({ reason: response.reason })
            )
          )
      )
    )
  );
}
