import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GatosrutaComponent } from './gatos/gatosruta/gatosruta.page';
import { PerrosrutaComponent } from './perros/perrosruta/perrosruta.page';
import { NombrerutaComponent } from './nombre/nombreruta/nombreruta.page';
import { NotFoundComponent } from './ComponentsGB/not-found/not-found.component';

const routes: Routes = [
  { path: "gato", component: GatosrutaComponent },
  { path: "perro", component: PerrosrutaComponent },
  { path: "nombre", component: NombrerutaComponent },
  { path: "", redirectTo: "gato", pathMatch: "full"},
  { path: "non-Page", component: NotFoundComponent},
  { path: "**", redirectTo: "non-Page", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
