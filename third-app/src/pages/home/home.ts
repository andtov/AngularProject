import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ANIMALES } from '../../data/data.animals';
import { animal } from '../../interfaces/animales';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
animales: animal[]=[];

  constructor() {
    this.animales = ANIMALES.slice(0);
  }

}
