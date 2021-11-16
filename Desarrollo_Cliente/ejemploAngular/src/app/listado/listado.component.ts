import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  listado: string[] = ["Joaquin","Fran","Pepe","Estefania"];
  aprobado: string = "Eliminado";
  aprobados: string[] = [];
  constructor() {}

  ngOnInit(): void {
  }

  borrarAlumno():void{
    if(this.listado.length>0){
      this.aprobado = this.listado[this.listado.length-1];
      this.aprobados.push(this.listado[this.listado.length-1])
      this.listado.pop() || '';
    }

  }

}
