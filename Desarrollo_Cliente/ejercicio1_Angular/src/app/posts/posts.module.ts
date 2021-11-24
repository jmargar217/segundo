import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoEntradasComponent } from './views/listado-entradas/listado-entradas.component';
import { ListadoPostsService } from './shared/services/listado-posts.service';
import { AgregarPostComponent } from './views/agregar-post/agregar-post.component';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './views/main-page/main-page.component';
import { ConsultarPostsService } from './shared/services/consultar-posts.service';
import { BorrarPostComponent } from './views/borrar-post/borrar-post.component';

@NgModule({
  declarations: [

    ListadoEntradasComponent,
     AgregarPostComponent,
     MainPageComponent,
     BorrarPostComponent,
  ],
  exports:[
    ListadoEntradasComponent,
    AgregarPostComponent,
    MainPageComponent,
    BorrarPostComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    ListadoPostsService,
    ConsultarPostsService
  ]
})
export class PostsModule { }
