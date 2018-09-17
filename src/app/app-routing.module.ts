import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketsComponent } from './tickets/tickets.component';
import { PermitsComponent } from './permits/permits.component';
import { MissionComponent } from './mission/mission.component';
const routes: Routes = [

  {
    path: '',
    component: MissionComponent,
  }
  {
    path: 'tickets',
    component: TicketsComponent,
  }
  {
    path: 'permits',
    component: PermitsComponent

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
