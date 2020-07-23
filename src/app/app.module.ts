import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FilterComponent } from './components/shopping-cart/filter/filter.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
    FilterComponent,
    ProductListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
