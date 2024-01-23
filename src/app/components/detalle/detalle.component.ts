import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Iproducts } from '../../interfaces/iproducts';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {id!:number;
  product!:Iproducts;
  constructor(
    private servicio: ServiceService,
    private rutaActivada: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.rutaActivada.paramMap.subscribe(params =>{
    

    this.id =Number(params.get("id"))
    


    })

  }
}
