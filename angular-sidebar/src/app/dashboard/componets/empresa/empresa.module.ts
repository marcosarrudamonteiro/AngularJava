import { UfComponent } from './../estado/uf/uf.component';
import { EmpresaComponent } from './empresa.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
export class EmpresaModule { }
