import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { StoreModule } from '@ngrx/store';
import { reducer, PIZZA_FEATURE_NAME } from './pizza.store';
import { ReactiveComponentModule } from '@ngrx/component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { PizzaApiEffects } from './pizza-api.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarEffects } from './snackbar.effects';
import { RoutingEffects } from './routing.effects';

@NgModule({
  declarations: [AppComponent, PizzaComponent, HomeComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ [PIZZA_FEATURE_NAME]: reducer }),
    EffectsModule.forRoot([PizzaApiEffects, SnackbarEffects, RoutingEffects]),
    ReactiveComponentModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'order', component: PizzaComponent },
    ]),
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
