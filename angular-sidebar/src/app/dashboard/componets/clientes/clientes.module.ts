import { UfComponent } from './../estado/uf/uf.component';
import { PagamentosComponent } from '../pagamentos/pagamentos/pagamentos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesComponent } from './clientes.component';
import { UfService } from '../estado/uf.service';




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule
  ],

  providers:
  [
    UfService

  ]

})
export class ClientesModule { }
