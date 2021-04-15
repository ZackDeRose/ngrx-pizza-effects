import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { PizzaState } from '../pizza.store';

@Injectable({
  providedIn: 'root',
})
export class PizzaOrderApiService {
  sendPizzaOrderRequest({
    hasSausage,
  }: PizzaState): Observable<
    { result: 'success' } | { result: 'error'; reason: string }
  > {
    return timer(3000).pipe(
      map(() =>
        hasSausage
          ? {
              result: 'error',
              reason: `Sorry, we're out of sausage right now... Please try again later!`,
            }
          : { result: 'success' }
      )
    );
  }
}
