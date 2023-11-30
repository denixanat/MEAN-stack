import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Perro } from 'src/app/interfaces/perros.interface';
import { PerroService } from '../../service/perro.service';
@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent {
  /* Perro service  */
  constructor(private perroService: PerroService) { }
  /* Perro service  */

  @Input()
  public PerroB: Perro = {
    id: 0,
    name: "",
    image: "",
    isDone: false
  }

  public deletefromArray(): void {
    this.perroService.metodoborrarp(this.PerroB.name);
  }

}
