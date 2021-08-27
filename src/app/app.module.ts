import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsModule } from './components/products/products.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { TesteComponent } from './teste/teste.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ProductsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
