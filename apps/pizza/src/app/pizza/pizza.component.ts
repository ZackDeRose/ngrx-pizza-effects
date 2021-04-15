import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addPepperoni,
  addSausage,
  hasPepperoni,
  hasSausage,
  removePepperoni,
  removeSausage,
  requestPending,
  selectPizzaImage,
  selectPizzaPrice,
  userClicksOrderNow,
} from '../pizza.store';

@Component({
  selector: 'ngrx-pizza-example-app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss'],
})
export class PizzaComponent {
  imgUrl$ = this._store.select(selectPizzaImage);
  price$ = this._store.select(selectPizzaPrice);
  hasPepperoni$ = this._store.select(hasPepperoni);
  hasSausage$ = this._store.select(hasSausage);
  requestPending$ = this._store.select(requestPending);

  constructor(private _store: Store) {}

  pepperoniClick(hasPepperoni: boolean) {
    this._store.dispatch(hasPepperoni ? removePepperoni() : addPepperoni());
  }

  sausageClick(hasSausage: boolean) {
    this._store.dispatch(hasSausage ? removeSausage() : addSausage());
  }

  buyNowClick() {
    this._store.dispatch(userClicksOrderNow());
  }
}
