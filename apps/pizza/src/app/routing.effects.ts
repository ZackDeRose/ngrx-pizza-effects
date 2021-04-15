import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { apiRespondsWithSuccess } from './pizza.store';

@Injectable()
export class RoutingEffects {
  constructor(private router: Router, private actions: Actions) {}

  returnToHomeAfterSuccess$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(apiRespondsWithSuccess),
        tap(() => {
          this.router.navigate(['']);
        })
      ),
    { dispatch: false }
  );
}
