import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-gestion-pages',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './gestion-pages.component.html',
  styleUrl: './gestion-pages.component.css',
})
export class GestionPagesComponent {
  constructor(private servicio: ServiceService) {}
  public product: any = {
    name: '',
    price: '',
    size: '',
    color: '',
    material: '',
    image: '',
  };

  addProducto() {
    this.servicio.postProducto(this.product).subscribe();
    alert('Producto Creado');
  }

  deleteProducto() {
    this.servicio.deleteProducto(this.product).subscribe();
    alert('Eliminado Producto');
  }
}
