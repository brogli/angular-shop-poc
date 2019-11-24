import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ProductCategoriesComponent } from './product-categories/product-categories.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShopMenuComponent } from './shop-menu/shop-menu.component';
import { LocalStorageService } from './local-storage.service';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCategoriesComponent,
    ProductListComponent,
    ProductDetailComponent,
    MessagesComponent,
    WelcomeComponent,
    ShopMenuComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StorageServiceModule,
    BrowserAnimationsModule,
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
