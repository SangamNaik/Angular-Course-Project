import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { RecipesRoutingModule } from './recipes/recipes-routing.module';
import { ShoppingListRoutingModule } from './shopping-list/shopping-list-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RecipesRoutingModule,
    ShoppingListRoutingModule,
    SharedModule,
    CoreModule,
    AuthRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
