import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { StoreModule } from '@ngrx/store';
import { reducer, PIZZA_FEATURE_NAME } from './pizza.store';
import { ReactiveComponentModule } from '@ngrx/component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, PizzaComponent, HomeComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ [PIZZA_FEATURE_NAME]: reducer }),
    ReactiveComponentModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'order', component: PizzaComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
