import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../templates/card/card.component';
import { MenuComponent } from '../templates/menu/menu.component';

@NgModule({
  declarations: [
    CardComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    MenuComponent
  ]
})
export class SharedModule { }
