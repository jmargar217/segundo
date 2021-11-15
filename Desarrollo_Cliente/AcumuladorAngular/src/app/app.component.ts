import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = 'Acumulador Angular';
  contador: number = 0;

  incremento(incremento:number){
    this.contador +=incremento;
  }
  resetear():void{
    this.contador =0;
  }
}
