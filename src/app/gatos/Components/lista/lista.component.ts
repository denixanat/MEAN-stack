import { Component } from '@angular/core';
import { Gato } from 'src/app/interfaces/gatos.interface';
import { GatoService } from '../../service/gato.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  public searchTerm: string = "";
  public newGato: Gato = { id: 0, name: '', image: '', isDone: false };

  constructor(private gatoService: GatoService) {
    this.searchGatos();
  }

  public get gatos(): Gato[] {
    return this.gatoService.gatos;
  }

  public onsortGatosAlphabetically(): void {
    this.gatoService.sortGatosAlphabetically();
  }

  public searchByTerm(): void {
    this.searchGatos(this.searchTerm);
  }

  public addGato(): void {
    if (this.newGato.id && this.newGato.name && this.newGato.image) {
      this.gatoService.addGato(this.newGato);
      // Clear the input fields after adding the cat
      this.newGato = { id: 0, name: '', image: '', isDone: false };
    }
  }

  private searchGatos(searchTerm: string = ""): void {
    this.gatoService.fetchPersonajesFromApi(searchTerm)
      .subscribe({
        next: response => {
          console.log(response);
          this.gatoService.gatos = response.gatoslista;
        },
        error: error => {
          console.log(error);
        }
      });
  }

  public editedGato: Gato = { id: 0, name: '', image: '', isDone: false };

  // ...
  
  public editForm(selectedGato: Gato): void {
    this.editedGato = { ...selectedGato };
  }
  
  public editGato(): void {
    if (this.editedGato.id && this.editedGato.name && this.editedGato.image) {
      this.gatoService.updateGato(this.editedGato.id, this.editedGato)
        .subscribe(
          response => {
            this.editedGato = { id: 0, name: '', image: '', isDone: false };
            this.searchByTerm();
          },
          error => {
            console.error(error);
          }
        );
    }
  }
  
}
