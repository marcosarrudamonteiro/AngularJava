import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { UfService } from '../estado/uf.service';
import { UfComponent } from '../estado/uf/uf.component';



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
export class FuncionarioModule { }
