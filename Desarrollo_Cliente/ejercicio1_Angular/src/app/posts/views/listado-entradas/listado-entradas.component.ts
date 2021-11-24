import { Component, OnInit } from '@angular/core';
import { Entrada } from '../../shared/interfaces/entrada';
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

  constructor(private serviceListar:ListadoPostsService) {}

  ngOnInit(): void {
  }

}
