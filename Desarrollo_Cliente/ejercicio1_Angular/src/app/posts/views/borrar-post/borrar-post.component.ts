import { Component, Input, OnInit } from '@angular/core';
import { Entrada } from '../../shared/interfaces/entrada';
import { ListadoPostsService } from '../../shared/services/listado-posts.service';

@Component({
  selector: 'app-borrar-post',
  templateUrl: './borrar-post.component.html',
  styleUrls: ['./borrar-post.component.css']
})
export class BorrarPostComponent implements OnInit {
  @Input() postBorrar: Entrada={
    titulo: '',
    autor: '',
    contenido: ''
  };

  constructor(private borrarService:ListadoPostsService) { }

  ngOnInit(): void {
  }

  borrarPost():void{
    this.borrarService.borrar(this.postBorrar);
  }

}
