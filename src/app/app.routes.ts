import { Routes } from '@angular/router';
import { DataBidingComponent } from './demos/data-biding/data-biding.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { HomeComponent } from './navegacao/home/home.component';
import { ProductsListComponent } from './products/products-list/products-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => HomeComponent },
  { path: 'contato', loadComponent: () => ContatoComponent },
  { path: 'sobre', loadComponent: () => SobreComponent },
  { path: 'sobre', loadComponent: () => SobreComponent },
  { path: 'feature-data-biding', loadComponent: () => DataBidingComponent },
  { path: 'produtos', loadComponent: () => ProductsListComponent }
];
