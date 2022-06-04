import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TheSimpsons } from 'src/app/models/theSimpsom.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RamdomcharactersService {
  constructor(private http: HttpClient) {}

  get(){
    return this.http.get<Array<TheSimpsons>>(
      `${environment.url_API}`
    )
  }
}
