import { NgModule } from "@angular/core";
import { ControlsComponent } from "./Components/controls/controls.component";
import { GatoComponent } from "./Components/gato/gato.component";
import { ListaComponent } from "./Components/lista/lista.component";
import { CommonModule } from "@angular/common";

import { GatosrutaComponent } from "./gatosruta/gatosruta.page";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        ControlsComponent,
        GatoComponent,
        ListaComponent,
        GatosrutaComponent
    ],
    exports:[
        ControlsComponent,
        ListaComponent,  
    ],
    imports:[
        CommonModule,
        FormsModule
    ]
})
export class GatosModule{}