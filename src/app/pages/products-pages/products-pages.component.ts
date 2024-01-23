import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../../interfaces/iproducts';
import { ServiceService } from '../../services/service.service';
import { RouterLink } from '@angular/router';
import { GestionPagesComponent } from '../gestion-pages/gestion-pages.component';

@Component({
  selector: 'app-products-pages',
  standalone: true,
  imports: [RouterLink,GestionPagesComponent],
  templateUrl: './products-pages.component.html',
  styleUrl: './products-pages.component.css'
})
export class ProductsPagesComponent {
 public productsList:Iproducts [] = [];
//  public currentPage = 1;
//  public itemsPerPage = 10;
 public  currentProduc: Iproducts ={
  id:'',
  name:'',
  price:'',
  size:'',
  color:'',
  material:'',
  image:''
 }
 

constructor(private servicio:ServiceService){}

ngOnInit():void{
this.servicio.getProducts().subscribe((data:any)=>{
this.productsList = data
})
}
}
