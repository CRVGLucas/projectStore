import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { MenuComponent } from './templates/menu/menu.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRouting } from './app.routing';
import { CardComponent } from './templates/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    NotFoundComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
