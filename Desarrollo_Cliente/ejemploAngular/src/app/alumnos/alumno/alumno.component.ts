import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  nombre:string = "Joaquin";
  edad:number = 25;

  get nombreMayus():string{
    return this.nombre.toUpperCase();
  }

  cambiarEdad():void{
    this.edad=28;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
