import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlumnosModule } from './alumnos/alumnos.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { BrawlStarsModule } from './brawl-stars/brawl-stars.module';


//ng g m brawl-stars -m app crear modulo y que lo importe directamente
// ng g c brawl-starts/


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    AlumnosModule,
    ContadorModule,
    BrowserModule,
    AppRoutingModule,
    BrawlStarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
