import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../../interfaces/iproducts';
import { ServiceService } from '../../services/service.service';


@Component({
  selector: 'app-products-pages',
  standalone: true,
  imports: [],
  templateUrl: './products-pages.component.html',
  styleUrl: './products-pages.component.css'
})
export class ProductsPagesComponent {
 public productsList:Iproducts [] = [];
 public currentPage = 1;
  public itemsPerPage = 10;

constructor(private servicio:ServiceService){}

ngOnInit():void{
this.servicio.getProducts().subscribe((data:any)=>{
this.productsList = data
})
}

}
