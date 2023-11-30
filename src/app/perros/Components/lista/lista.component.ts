import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Perro } from "src/app/interfaces/perros.interface";
import { PerroService } from '../../service/perro.service';

@Component({
  selector: 'app-listap',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  /* Perro service */
  constructor(private PerroService : PerroService){
    this.PerroService.fetchPersonajesFromApi2().subscribe(
      {
        next: (response : any) => {
          console.log(response);
          this.PerroService.perros = response.perroslista;
        },
        error: (error : any) => {
          console.log(error);
         
        }
      }
    )
  }
  public get perros() : Perro[]{
    return this.PerroService.perros;
  }
  /* Perro service */

  public invertirArreglo() : void {
    this.PerroService.invertirArreglo();
  }
}
