import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombreComponent } from './nombre.component';

import { NombrerutaComponent } from '../nombre/nombreruta/nombreruta.page';

@NgModule({
  declarations: [
    NombreComponent,
    NombrerutaComponent
  ],exports:[
    NombreComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NombreModule { }
