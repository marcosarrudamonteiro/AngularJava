import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardRoutingModule} from "./dashboard-routing-module";
import { WrapperComponent } from './componets/wrapper/wrapper.component';
import { DashboardsComponent } from './componets/dashboards/dashboards.component';
import { InfoComponent } from './componets/info/info.component';
import { UserComponent } from './componets/user/user.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatMenuModule} from "@angular/material/menu";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {ToolbarRoutingModule} from "../toolbar/toolbar-routing-module";
import { DadosPessoaisComponent } from './componets/dados-pessoais/dados-pessoais.component';



@NgModule({
  declarations: [
    WrapperComponent,
    DashboardsComponent,
    InfoComponent,
    UserComponent,
    DadosPessoaisComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatExpansionModule,
    MatMenuModule,
    MatTooltipModule,
    MatButtonModule,
    ToolbarRoutingModule
  ]
})
export class DashboardModule { }
