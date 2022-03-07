import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientesComponent } from './componets/clientes/clientes.component';
import { DadosPessoaisComponent } from './componets/dados-pessoais/dados-pessoais.component';
import { DashboardsComponent } from './componets/dashboards/dashboards.component';
import { EmpresaComponent } from './componets/empresa/empresa.component';
import { FuncionarioComponent } from './componets/funcionario/funcionario/funcionario.component';
import { InfoComponent } from './componets/info/info.component';
import { PagamentosComponent } from './componets/pagamentos/pagamentos/pagamentos.component';
import { UserComponent } from './componets/user/user.component';
import { WrapperComponent } from './componets/wrapper/wrapper.component';


const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardsComponent
      },
      {
        path: 'info',
        component: InfoComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'dadosPessoais',
        component: DadosPessoaisComponent
      },
      {
        path: 'empresa',
        component: EmpresaComponent         },
      {
        path: 'funcionario',
        component: FuncionarioComponent     },

        {
          path: 'clientes',
          component: ClientesComponent   },
        {
          path: 'pagamentos',
          component: PagamentosComponent         }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
