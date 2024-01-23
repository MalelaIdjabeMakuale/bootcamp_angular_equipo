import { Component } from '@angular/core';
import { Iproducts } from '../../interfaces/iproducts';
import { ServiceService } from '../../services/service.service';
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-products-pages',
  standalone: true,
  imports: [PaginationComponent],
  templateUrl: './products-pages.component.html',
  styleUrl: './products-pages.component.css'
})
export class ProductsPagesComponent {
 public productsList:Iproducts [] = []

constructor(private servicio:ServiceService){}

ngOnInit():void{
this.servicio.getProducts().subscribe((data:any)=>{
this.productsList = data
})
}

}
