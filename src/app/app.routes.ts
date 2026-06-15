import { Routes } from '@angular/router';
import { ListProducts } from './list-products/list-products';
import { AddProduct } from './add-product/add-product';
import { EditProduct } from './edit-product/edit-product';
import { DeleteProduct } from './delete-product/delete-product';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },   
  { path: 'list', component: ListProducts },
  { path: 'add', component: AddProduct },
  { path: 'update/:id', component: EditProduct },
  { path: 'delete/:id', component: DeleteProduct }
];
