import { InfoComponent } from './pages/info/info.component';
import { Routes } from '@angular/router';
import { GestionPagesComponent } from './pages/gestion-pages/gestion-pages.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { ProductsPagesComponent } from './pages/products-pages/products-pages.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { EditarComponent } from './pages/editar/editar.component';

export const routes: Routes = [
  { path: '', component: HomePagesComponent },
  { path: 'gestion', component: GestionPagesComponent },
  { path: 'productos', component: ProductsPagesComponent },
  {path: 'productos/:id', component: DetalleComponent}, {path:'opiniones', component:InfoComponent},
  {path: 'gestion/:id', component:EditarComponent },
 
  
];
