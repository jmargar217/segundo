import { Component, Input, OnInit } from '@angular/core';
import { Entrada } from '../../shared/interfaces/entrada';
import { ListadoPostsService } from '../../shared/services/listado-posts.service';

@Component({
  selector: 'app-agregar-post',
  templateUrl: './agregar-post.component.html',
  styleUrls: ['./agregar-post.component.css']
})
export class AgregarPostComponent implements OnInit {
  @Input() nuevoPost: Entrada={
    titulo: '',
    autor: '',
    contenido: ''
  };
  constructor(private agregarService:ListadoPostsService) { }

  ngOnInit(): void {
  }

  agregarPost():void{
    this.agregarService.agregarPost(this.nuevoPost);

    this.nuevoPost = {
      titulo:"",
      autor:"",
      contenido:""
    }
  }

}
