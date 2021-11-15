import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/entrada';



@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  // Atibutos
  public listadoEntradas: Entrada[];

  constructor() {
    this.listadoEntradas = [
      {
        titulo: 'Entrada 1',
        resumen: 'Ejemplo de entrada'
      },
      {
        titulo: 'Entrada 2',
        resumen: 'Ejemplo de entrada'
      },
      {
        titulo: 'Entrada 3',
        resumen: 'Ejemplo de entrada'
      }
    ];
  }

  ngOnInit(): void {
  }

  public mostrarTitulo(titulo: string): void {
    alert(`Entrada seleccionada: ${ titulo }.`);
  }

}
