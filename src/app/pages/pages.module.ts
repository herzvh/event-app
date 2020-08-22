import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event/event.component';
import { DevelopmentPathComponent } from './development-path/development-path.component';
import {PagesRoutingModule} from './pages-routing.module';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {ComponentsModule} from '../components/components.module';
import {NgxDocViewerModule} from 'ngx-doc-viewer';



@NgModule({
  declarations: [EventComponent, DevelopmentPathComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    PagesRoutingModule,
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    ComponentsModule,
    NgxDocViewerModule
  ]
})
export class PagesModule { }
