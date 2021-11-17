import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.css']
})
export class FechaComponent implements OnInit {
  fecha: Date;
  nombreMes:string[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  constructor() {
    this.fecha = new Date();
   }

  ngOnInit(): void {
  }

  mostrarFecha():number{
    return this.fecha.getDate();
  }

  mostrarNombreMes():string{
    return this.nombreMes[this.fecha.getMonth()]
  }

}
