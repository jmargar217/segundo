import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  numero:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incremento(incremento:number){
    this.numero +=incremento;
  }

}
