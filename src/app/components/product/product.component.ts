import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {HttpClient} from '@angular/common/http'
import { productResponseModel } from 'src/app/models/productResponseModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[] = []
  apiUrl = "https://localhost:44398/api/products/getall";

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.httpClient
    .get<productResponseModel>(this.apiUrl)
    .subscribe((response) => { //yanıt geldiğinde ne yapayım
      this.products = response.data;
    }); //gelen datayı productResponseModel'e map et
  }

}
