import { EmpresaModule } from './dashboard/componets/empresa/empresa.module';
import { ClientesModule } from './dashboard/componets/clientes/clientes.module';
import { EmpresaComponent } from './dashboard/componets/empresa/empresa.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppsComponent } from './toolbar/apps/apps.component';
import { NotificationsComponent } from './toolbar/notifications/notifications.component';
import { MyaccountComponent } from './toolbar/myaccount/myaccount.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { FuncionarioModule } from './dashboard/componets/funcionario/funcionario.module';

@NgModule({
  declarations: [
    AppComponent,
    AppsComponent,
    NotificationsComponent,
    MyaccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers:[
  ],
  bootstrap: [AppComponent]})
export class AppModule { }
