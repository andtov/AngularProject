import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina';
import { Equipo } from '../interfaces/equipo';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  equipo: Equipo;

  constructor(public _http: HttpClient) {

    this.cargarEquipo();

  }

  cargarDatos() {

    this._http.get('../../assets/data/infoPagina.json')
    .subscribe((datos) => {
      console.log(datos);
      this.info = datos;
    });

  }

  cargarEquipo() {

    this._http.get('https://app-template-67c39.firebaseio.com/equipo.json')
    .subscribe((datos) => {
      this.equipo = datos;
    });

  }
}
