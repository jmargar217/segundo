import { Component } from '@angular/core';
import { RelojComponent } from './reloj/reloj.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titulo: string;
  public contador: number ;
  public fecha: RelojComponent = new RelojComponent;

  constructor(){
    this.titulo="Acumulador Angular";
    this.contador=0;
  }

  incremento(incremento:number){
    this.contador +=incremento;
  }
  resetear():void{
    this.contador =0;
  }
}
