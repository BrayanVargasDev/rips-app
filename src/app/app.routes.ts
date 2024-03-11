import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.component'),
    children: [
      {
        path: 'login',
        title: 'Para esto sirve el titulo y para muchas cosas más',
        loadComponent: () => import('./auth/pages/login-page/login-page.component'),
        data: {
          
        }
      }
    ]
  }
];
