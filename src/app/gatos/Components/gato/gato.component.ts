import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Gato } from "src/app/interfaces/gatos.interface";

@Component({
  selector: 'app-gato',
  templateUrl: './gato.component.html',
  styleUrls: ['./gato.component.css']
})
export class GatoComponent {
  @Input()//si no me llega nada por defecto escribir eso
  public Gato: Gato = {
    id: 0,
    name: "",
    image: "",
    isDone: false,
  };


}
