import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gato } from 'src/app/interfaces/gatos.interface';

@Injectable({
  providedIn: 'root'
})
export class GatoService {

  constructor(private http: HttpClient) {}

  fetchPersonajesFromApi(searchTerm: string): Observable<any> {
    return this.http.get(`http://localhost:8080/api/module1?searchTerm=${searchTerm}`);
  }

  updateGato(gatoId: number, updatedGato: any): Observable<any> {
    return this.http.put(`http://localhost:8080/api/module1/${gatoId}`, updatedGato);
  }
  deleteGato(gatoId: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/api/module1/${gatoId}`);
  }

  public addGato(newGato: Gato): void {
    this.gatos.push(newGato);
  }

  public gatos: Gato[] = [];

  public metodoborrarg(gato: string): void {
    let gato_select = this.gatos.findIndex(gatos => gatos.name == gato);
    this.gatos.splice(gato_select, 1);
  }

  sortGatosAlphabetically() {
    this.gatos.sort((a, b) => a.name.localeCompare(b.name));
  }
}

