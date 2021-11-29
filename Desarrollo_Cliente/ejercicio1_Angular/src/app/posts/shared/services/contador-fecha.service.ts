import { Injectable } from '@angular/core';
import { Entrada } from '../interfaces/entrada';


@Injectable({
  providedIn: 'root'
})
export class ContadorFechaService {
  private _fecha:Date = new Date();

  get fecha():String{
    return this._fecha.toLocaleDateString();
  }

  constructor() {
    console.log("El servicio contador-fecha se ha iniciado");
   }

  obtenerContadorPost(listado:Entrada[]):number{
    let contador = listado.length;
    return contador;
  }
}
