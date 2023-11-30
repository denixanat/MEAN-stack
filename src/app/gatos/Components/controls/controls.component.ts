import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Gato } from 'src/app/interfaces/gatos.interface';
import { GatoService } from '../../service/gato.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {

  //------> Service Gato
  constructor(private gatoService : GatoService){}
  //------> Service Gato

  @Input()
  public GatoB: Gato = {
    id: 0,
    name: "",
    image: "",
    isDone: false
  }

  public deletefromArray(): void {
    this.gatoService.metodoborrarg(this.GatoB.name);
  }

}
