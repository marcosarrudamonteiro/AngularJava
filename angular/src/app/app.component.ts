import {Component} from '@angular/core';
import {CadastroService} from "./service/cadastro.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  constructor(private cadastroService: CadastroService) {
  }

  usuario = {nome: "", email: "", senha: ""};

  public cadastrar() {
    this.cadastroService.cadastro(this.usuario)
  }
}
