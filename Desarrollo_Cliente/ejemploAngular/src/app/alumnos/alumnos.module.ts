import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnoComponent } from './alumno/alumno.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [
    AlumnoComponent,
    ListadoComponent
  ],
  exports: [
    AlumnoComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule

  ]
})
export class AlumnosModule { }
