import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductModel } from "./entities/models/product.model";

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  protected serviceUrl: string = "http://localhost:3000"

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ProductModel[]> {
    return this.httpClient.get<ProductModel[]>(`${this.serviceUrl}/products`)
  }

  getOne(id: string): Observable<ProductModel> {
    return this.httpClient.get<ProductModel>(`${this.serviceUrl}/products/${id}`)
  }
}