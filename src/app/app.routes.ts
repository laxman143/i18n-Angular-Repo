import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'customer', loadComponent: () => import('./customer/customer.component').then(m => m.CustomerComponent) },
    { path: 'product', loadComponent: () => import('./product/product.component').then(m => m.ProductComponent) },
  ];
  
