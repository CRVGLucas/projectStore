import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../templates/card/card.component';
import { MenuComponent } from '../templates/menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CardComponent,
    MenuComponent
  ],
  imports: [
    CommonModule, 
    RouterModule
  ],
  exports: [
    CardComponent,
    MenuComponent
  ]
})
export class SharedModule { }
