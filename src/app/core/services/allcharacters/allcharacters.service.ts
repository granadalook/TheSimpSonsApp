import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TheSimpsons } from 'src/app/models/theSimpsom.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AllcharactersService {
  constructor(private http: HttpClient) {}
  getAll(cantidad: number | undefined) {
    return this.http.get<Array<TheSimpsons>>(
      `${environment.url_API}${environment.cantidadPersonajes}` + cantidad
    );
  }
}