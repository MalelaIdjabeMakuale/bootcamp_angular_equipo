import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../../interfaces/iproducts';
import { ServiceService } from '../../services/service.service';

import { RouterLink } from '@angular/router';
import { GestionPagesComponent } from '../gestion-pages/gestion-pages.component';
import { FormsModule, NgModel } from '@angular/forms';


@Component({
  selector: 'app-products-pages',
  standalone: true,

  imports: [RouterLink,GestionPagesComponent, FormsModule],

  templateUrl: './products-pages.component.html',
  styleUrl: './products-pages.component.css'
})
export class ProductsPagesComponent {
 public productsList:Iproducts [] = [];
 public productsLists:Iproducts [] = [];
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
this.servicio.getProducts().subscribe((data:any)=>{
  this.productsLists = data
})


}





 searchProduct: any =  '';
 buscados:any[] = [];

 searchProducts(){
  const lowerCaseTerm=this.searchProduct.toLowerCase();


this.productsList = this.productsList.filter( (product: any) => 
 product.name.toLowerCase().includes(lowerCaseTerm));


 }
}
