import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraComponent } from "./barra.component";
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [
    BarraComponent
  ],
  exports:[
    BarraComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class BarraModule { }
{
  
}