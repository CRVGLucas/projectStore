import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products.component';

const productRouter: Routes = [
    {path: '', component: ProductsComponent},
    {path: '/:id', component: ProductDetailComponent}
]

@NgModule({
    imports: [RouterModule.forChild(productRouter)],
    exports: [RouterModule]
})

export class ProductRouter {}