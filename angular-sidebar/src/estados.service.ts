import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  estadoURL = "http://localhost:8080/uf";

  constructor(private http: HttpClient) { }

  listar()
  {
    return this.http.get<any[]>( '${this.estadoURL}');
  }
}
