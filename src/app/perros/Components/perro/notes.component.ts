import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Perro } from "src/app/interfaces/perros.interface";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent {
  @Input()
    public Perro: Perro={
    id:0,
    name: "",
    image: "",
    isDone:false,
  };

}
