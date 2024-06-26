import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListingsComponent } from './pages/listings/listings.component';
import { ListingProductComponent } from './pages/listing-product/listing-product.component';

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
  {
    path: 'listing-product/:id',
    component: ListingProductComponent,
    data: { id: 1, name: 'james' },
    title: 'Listing Product Page',
  },
];
