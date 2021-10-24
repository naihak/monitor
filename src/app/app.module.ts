import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PollerComponent } from './components/poller/poller.component';
import { PollersComponent } from './components/pollers/pollers.component';
import { AddPollerComponent } from './components/add-poller/add-poller.component';

@NgModule({
  declarations: [
    AppComponent,
    PollerComponent,
    PollersComponent,
    AddPollerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
