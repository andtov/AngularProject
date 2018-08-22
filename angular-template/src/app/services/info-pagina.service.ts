import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};

  constructor(public _http: HttpClient) {

    this._http.get('../../assets/data/infoPagina.json')
    .subscribe((datos) => {
      console.log(datos);
      this.info = datos;
    });

  }
}
