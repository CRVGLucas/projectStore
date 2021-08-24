import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductsComponent } from './products.component';


const productRouter: Routes = [
    {
        path: '', component: ProductsComponent,
        children: [
            {path: 'detalhe/:id', component: DetailProductComponent},
            {path: 'editar/:id', component: EditProductComponent}
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(productRouter)],
    exports: [RouterModule]
})

export class ProductRouter {}