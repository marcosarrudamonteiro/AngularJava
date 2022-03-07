import { UfModel } from './uf-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const url = environment.ApiEndPoint;//aponta para localhost:8080 ou para o servidor de produçao posteriormente

@Injectable({
  providedIn: 'root'
})
export class UfService
{
  constructor(private http: HttpClient )  {  }

  getAll(): Observable<UfModel[]>  { //retorna os campos da classe como um vetor. Estes serão detalhados no arquivo uf.component.html
    return this.http.get<UfModel[]>(url+"/uf");
  }
}