import { Component, OnInit } from '@angular/core';
import { Entrada } from '../../shared/interfaces/entrada';
import { ContadorFechaService } from '../../shared/services/contador-fecha.service';
import { ListadoPostsService } from '../../shared/services/listado-posts.service';

@Component({
  selector: 'app-listado-entradas',
  templateUrl: './listado-entradas.component.html',
  styleUrls: ['./listado-entradas.component.css']
})
export class ListadoEntradasComponent implements OnInit {

  get posts():Entrada[]{
    return this.serviceListar.posts;
  }

  get fecha():String{
    return this.contadorFecha.fecha;
  }

  get contador():number{
    return this.contadorFecha.obtenerContadorPost(this.posts);
  }

  constructor(private serviceListar:ListadoPostsService, private contadorFecha:ContadorFechaService) {}

  ngOnInit(): void {
  }


  ocultar():void{

  }
  mostrar():void{

  }


}
