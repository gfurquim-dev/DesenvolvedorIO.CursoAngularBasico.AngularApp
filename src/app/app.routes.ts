import { Routes } from '@angular/router';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { HomeComponent } from './navegacao/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => HomeComponent },
  { path: 'contato', loadComponent: () => ContatoComponent },
  { path: 'sobre', loadComponent: () => SobreComponent },
];
