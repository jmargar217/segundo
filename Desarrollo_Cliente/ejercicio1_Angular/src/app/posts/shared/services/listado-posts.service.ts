
import { Injectable } from '@angular/core';
import { Entrada } from '../interfaces/entrada';

 @Injectable() export class ListadoPostsService {
  private _posts: Entrada[] = [
    {
    titulo:"Angular",
    autor:"Joaquin",
    contenido:"Angular es un framework para aplicaciones web desarrollado en TypeScript, de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página"
    },
    {
      titulo:"Spring",
      autor:"Paco",
      contenido:"Spring es un framework para el desarrollo de aplicaciones y contenedor de inversión de control, de código abierto para la plataforma Java.​La primera versión fue escrita por Rod Johnson"
      },
    {
      titulo:"Docker",
      autor:"Julio",
      contenido:"Docker es un proyecto de código abierto que automatiza el despliegue de aplicaciones dentro de contenedores de software, proporcionando una capa adicional de abstracción y automatización de virtualización de aplicaciones en múltiples sistemas operativos"
    }

  ]

  get posts():Entrada[]{
    return [...this._posts];
  }

  agregarPost(post:Entrada){
    this._posts.push(post);
  }

  borrar(post:Entrada){
    let pos:number = 0;
    let contador:number = -1;

    for(let aux of this._posts){
      contador+=1;
      if(post.autor==aux.autor && post.titulo == aux.titulo){
        pos = contador;
      }
    }
    // Para que no me borre posts tengo que comprobar que sea distinto el "pos", de lo contrario me borra uno por uno
    if(pos != 0){
      this._posts.splice(pos,1);
    }
  }

  constructor() {
    console.log("El servicio listado se ha iniciado");
   }


}
