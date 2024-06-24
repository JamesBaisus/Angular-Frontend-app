import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListingsComponent } from './pages/listings/listings.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },

  {
    path: 'listings',
    component: ListingsComponent,
    title: 'Listing Page',
  },
];
