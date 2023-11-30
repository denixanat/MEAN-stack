import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Perro } from 'src/app/interfaces/perros.interface';

@Injectable({
  providedIn: 'root'
})
export class PerroService {
  constructor(private http: HttpClient){}
 
  fetchPersonajesFromApi2() : Observable<any>{
    return this.http.get("http://localhost:8080/api/module2");
  }

  public perros: Perro[] = []

  public metodoborrarp(perro: string): void {
    let perro_select = this.perros.findIndex(perros => perros.name == perro);
    this.perros.splice(perro_select, 1);
  }

  public invertirArreglo(): void {
    this.perros = this.perros.reverse();
  }
}
