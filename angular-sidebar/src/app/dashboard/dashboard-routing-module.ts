import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WrapperComponent} from "./componets/wrapper/wrapper.component";
import {DashboardsComponent} from "./componets/dashboards/dashboards.component";
import {InfoComponent} from "./componets/info/info.component";
import {UserComponent} from "./componets/user/user.component";

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
