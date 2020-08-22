import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventComponent} from './event/event.component';
import {DevelopmentPathComponent} from './development-path/development-path.component';


const routes: Routes = [
  {
    path: 'event',
    component: EventComponent,
    data: {animation: 'EventPage'}
  }, {
    path: 'development-path',
    component: DevelopmentPathComponent,
    data: {animation: 'DevelopmentPathPage'}
  }, {
    path: '**',
    redirectTo: 'event'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
