import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iproducts } from '../../interfaces/iproducts';
import { ServiceService } from '../../services/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
id!: string;
product!: Iproducts;
constructor(
  private servicio:ServiceService,
  private rutaActivada: ActivatedRoute
){}

ngOnInit(): void {
  this.rutaActivada.paramMap.subscribe((params) => {
    this.id = String(params.get('id'));
  });

  this.servicio.getProductosByiD(this.id).subscribe((data: any) => {
    // console.log(data);
    this.product = data;
  });
}

addProducto(){
  this.servicio.postProducto(this.product).subscribe();
  alert('Producto Creado'); 
}

deleteProducto(){
  this.servicio.deleteProducto(this.product.id).subscribe();
  alert('Producto eliminado');  
}

modificarProducto(){
  this.servicio.modificarProducto(this.product.id, this.product).subscribe();
  alert('Producto Modificado')
}

}
