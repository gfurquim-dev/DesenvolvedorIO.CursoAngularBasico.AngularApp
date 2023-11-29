import { Routes } from '@angular/router';
import { DataBidingComponent } from './demos/data-biding/data-biding.component';
import { AboutComponent } from './institucional/about/about.component';
import { ContactUsComponent } from './institucional/contact/contact-us.component';
import { HomeComponent } from './navigation/home/home.component';
import { ProductsListComponent } from './products/products-list/products-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => HomeComponent },
  { path: 'contact-us', loadComponent: () => ContactUsComponent },
  { path: 'about', loadComponent: () => AboutComponent },
  { path: 'feature-data-binding', loadComponent: () => DataBidingComponent },
  { path: 'products', loadComponent: () => ProductsListComponent }
];
