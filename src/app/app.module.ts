import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MissionComponent } from './mission/mission.component';
import { TicketsComponent } from './tickets/tickets.component';
import { InfobarComponent } from './infobar/infobar.component';
import { PermitsComponent } from './permits/permits.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MissionComponent,
    TicketsComponent,
    InfobarComponent,
    PermitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
