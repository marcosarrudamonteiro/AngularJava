import {NgModule} from '@angular/core';
import {TooltipComponent} from '@angular/material/tooltip';
import {RouterModule, Routes} from '@angular/router';
import {MyaccountComponent} from './myaccount/myaccount.component';
import {NotificationsComponent} from './notifications/notifications.component';

const routes: Routes = [
  {
    path: '',
    component: TooltipComponent,
    children: [
      {
        path: 'dashboard',
        component: MyaccountComponent
      },
      {
        path: 'info',
        component: NotificationsComponent
      }
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
export class ToolbarRoutingModule {
}
