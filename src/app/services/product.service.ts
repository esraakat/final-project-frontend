import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productResponseModel } from '../models/productResponseModel';

@Injectable({ //enjekte edilecek servis demek
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }
  
  apiUrl = "https://localhost:44398/api/products/getall";

  //servisten api isteği yapmak için
  getProducts(): Observable<productResponseModel> { //subcribe olunabilir bir responsemodel döneceksin
    return this.httpClient.get<productResponseModel>(this.apiUrl);
  }
}