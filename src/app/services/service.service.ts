import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public baseUrl:string="http://localhost:3000/products"
  public productsUrl: string =`${this.baseUrl}`

  constructor(private http: HttpClient) { }
  
  public getProducts(){
    return this.http.get(this.productsUrl)
  }

  public postProducto(product: any) {
    return this.http.post(this.productsUrl, product);
  }

  public deleteProducto(id: string) {
    return this.http.delete(`${this.productsUrl}/${id}`);
  }

  public getProductosByiD(id: string) {
    return this.http.get(`${this.productsUrl}/${id}`);
  }

  public modificarProducto(id: string, product: any) {
    return this.http.patch(`${this.productsUrl}/${id}`, product);
  }

}