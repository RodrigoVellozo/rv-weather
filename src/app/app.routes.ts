import { Routes } from '@angular/router';
import { homeResolver } from './core/services/resolvers/home.resolver';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    // resolve: {timelines: homeResolver}
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
