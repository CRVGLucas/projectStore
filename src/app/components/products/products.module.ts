import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRouter } from './product.routing';
import { ProductsComponent } from './products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProductsComponent,
    EditProductComponent,
    CreateProductComponent,
    DetailProductComponent
  ],
  imports: [
    CommonModule,
    ProductRouter,
    SharedModule
  ],
  exports:[ProductRouter]
})
export class ProductsModule { }
