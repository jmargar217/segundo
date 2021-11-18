import { Component, OnInit } from '@angular/core';
interface Personaje{
  nombre: string;
  salud: number;
}
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public personajes:Personaje[];
  public nombre:string="";
  public salud:number=0;

  constructor() {

    this.personajes = [
    { nombre: "Shelly",
      salud: 3600
    },
    {
      nombre: "Nita",
      salud: 3800
    },
    {
      nombre: "Colt",
      salud: 2800
    }
    ];

    console.log(this.personajes);
   }

  ngOnInit(): void {
  }

  agregar(){
    this.personajes.push({nombre: this.nombre,salud:this.salud});
    console.log(this.personajes);

  }
}
