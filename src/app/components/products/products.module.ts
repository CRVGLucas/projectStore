import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRouter } from './product.routing';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductRouter,
    ProductRouter
  ],
  exports:[ProductRouter]
})
export class ProductsModule { }
