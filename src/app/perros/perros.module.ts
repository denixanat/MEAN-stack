import { NgModule } from "@angular/core";
import { ControlsComponent } from "./Components/controls/controls.component";
import { NotesComponent } from "./Components/perro/notes.component";
import { ListaComponent } from "./Components/lista/lista.component";
import { CommonModule } from "@angular/common";

import { PerrosrutaComponent } from "./perrosruta/perrosruta.page";

@NgModule({
    declarations: [
        ControlsComponent,
        NotesComponent,
        ListaComponent,
        PerrosrutaComponent
    ],
    exports:[
        ControlsComponent,
        ListaComponent,
    ],
    imports:[
        CommonModule,
    ]
})

export class PerrosModule { 
}
