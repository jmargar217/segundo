import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlumnosModule } from './alumnos/alumnos.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador/contador.component';
import { FechaComponent } from './fecha/fecha/fecha.component';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    FechaComponent,

  ],
  imports: [
    AlumnosModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
