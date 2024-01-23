import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public baseUrl:string="http://localhost:3000/products"
  public productsUrl: string =`${this.baseUrl}/`

  constructor(private http:HttpClient) { }
  
  public getProducts(){
    return this.http.get(this.productsUrl)
  }

  public postProducto(product: any) {
    return this.http.post(this.productsUrl, product);
  }
  public deleteProducto(id: string) {
    return this.http.delete(`${this.productsUrl}${id}`);

    getCharacters(page:number, filters:any) {
      return this.http.get("" + page + (filters.name ? "&name=" + filters.name: "") + (filters.price ? "&price=" + filters.price: "") + (filters.size ? "&size=" + filters.size: "") + (filters.color ? "&color=" + filters.color: "")+ (filters.material ? "&material=" + filters.material: ""))
    }
  
    getCharacter(id:any) {
      return this.http.get("" + id)
    }
}
}

function getCharacters(page: any, number: any, filters: any, any: any) {
  throw new Error('Function not implemented.');
}
function getCharacter(id: string, any: any) {
  throw new Error('Function not implemented.');
}

