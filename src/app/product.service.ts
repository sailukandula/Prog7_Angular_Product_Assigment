import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './IProduct';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root',
})
export class ProductService  {


  httpStatus:Subject<string>=new Subject<string>;   

  constructor(private http: HttpClient) {}

  addProduct(product: IProduct) {
    return this.http.post("http://localhost:8080/api/product/addProduct", product);
  }

  getAllProducts() {
    return this.http.get<IProduct[]>("http://localhost:8080/api/product/list");
  }

  getProductById(id: number) {
    return this.http.get<IProduct>("http://localhost:8080/api/product/getProductById/" + id);
  }

  updateProduct(product: IProduct) {
    return this.http.put("http://localhost:8080/api/product/updateProduct", product);
  }

  deleteProduct(id: number) {
    return this.http.delete("http://localhost:8080/api/product/deleteProductById/" + id);
  }
  
}
