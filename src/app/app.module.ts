import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BarraModule } from './ComponentsGB/barra/barra.module';
import { NombreModule } from './nombre/nombre.module';
import { GatosModule } from './gatos/gatos.module';
import { PerrosModule } from './perros/perros.module';
import { NotFoundComponent } from './ComponentsGB/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  exports:[
    HttpClientModule
  ],
  imports: [
    BrowserModule,
    BarraModule,
    NombreModule,
    AppRoutingModule,
    GatosModule,
    PerrosModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
