import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import { AddEventComponent } from './add-event/add-event.component';
import {TimepickerModule} from 'ngx-bootstrap/timepicker';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {FormsModule} from '@angular/forms';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { UploadDocumentComponent } from './upload-document/upload-document.component';



@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    EventListComponent,
    AddEventComponent,
    ConfirmationModalComponent,
    UploadDocumentComponent
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    EventListComponent,
    AddEventComponent,
    ConfirmationModalComponent,
    UploadDocumentComponent
  ]
})
export class ComponentsModule { }
