import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {
  fecha: Date;

  constructor() {
    this.fecha = new Date();
  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  mostrarFecha():number{
    return this.fecha.getDate();
  }

}
