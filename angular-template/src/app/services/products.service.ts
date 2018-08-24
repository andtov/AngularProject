import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productos: Product;

  constructor(public _http: HttpClient) {

    this.cargarProductos();

  }

  cargarProductos() {

    this._http.get('https://app-template-67c39.firebaseio.com/productos_idx.json')
    .subscribe((datos) => {
      this.productos = datos;
    });

  }
}
