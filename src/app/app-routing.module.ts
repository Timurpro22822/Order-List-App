import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { AddProuctComponent } from './add-order/add-product.component';

const routes: Routes = [
  { path: '', component: OrderListComponent},
  { path: 'add-product', component: AddProuctComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
