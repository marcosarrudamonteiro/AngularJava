import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

class Usuario {
  nome: string = ""
  email: string = ""
  senha: string = ""
}

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private readonly API = '/api/cadastro';

  constructor(private http: HttpClient) {
  }

  cadastro(usuario: { senha: string; nome: string; email: string }) {
    const headers = {'content-type': 'application/json'}
    let body = JSON.stringify(usuario);
    console.log(body)
    return this.http.post<Usuario>(this.API,
      body,
      {
        headers: headers

      }
    ).subscribe()
  }
}
