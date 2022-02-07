import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppsComponent } from './toolbar/apps/apps.component';
import { NotificationsComponent } from './toolbar/notifications/notifications.component';
import { MyaccountComponent } from './toolbar/myaccount/myaccount.component';

@NgModule({
  declarations: [
    AppComponent,
    AppsComponent,
    NotificationsComponent,
    MyaccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
