import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { apiRespondsWithFailure, apiRespondsWithSuccess } from './pizza.store';

@Injectable()
export class SnackbarEffects {
  constructor(private snackbarService: MatSnackBar, private actions: Actions) {}

  failureNotifications$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(apiRespondsWithFailure),
        tap(({ reason }) => {
          this.snackbarService.open(
            `Unable to Complete Order: ${reason}`,
            'Click here to Adjust your order and retry'
          );
        })
      ),
    { dispatch: false }
  );

  successNotifications$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(apiRespondsWithSuccess),
        tap(() => {
          this.snackbarService.open(
            `Thanks for your Order!! Your pizza is on it's way!`,
            '👍'
          );
        })
      ),
    { dispatch: false }
  );
}
