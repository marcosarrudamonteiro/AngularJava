import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToolbarRoutingModule} from "./toolbar-routing-module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatMenuModule} from "@angular/material/menu";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {MyaccountComponent} from "./myaccount/myaccount.component";
import {AppModule} from "../app.module";
import { AppsComponent } from './apps/apps.component';
import {NotificationsComponent} from "./notifications/notifications.component";



@NgModule({
  declarations: [
    MyaccountComponent,
    AppsComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    ToolbarRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatExpansionModule,
    MatMenuModule,
    MatTooltipModule,
    MatButtonModule
  ]
})
export class ToolbarModule { }
