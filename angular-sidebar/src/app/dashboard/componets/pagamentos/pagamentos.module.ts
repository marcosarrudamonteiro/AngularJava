import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagamentosComponent } from './pagamentos/pagamentos.component';
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
export class PagamentosModule { }
