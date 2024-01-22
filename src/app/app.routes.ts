import { Routes } from '@angular/router';
import { GestionPagesComponent } from './pages/gestion-pages/gestion-pages.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { ProductsPagesComponent } from './pages/products-pages/products-pages.component';

export const routes: Routes = [
  { path: '', component: HomePagesComponent },
  { path: 'gestion', component: GestionPagesComponent },
  { path: 'productos', component: ProductsPagesComponent },
];
