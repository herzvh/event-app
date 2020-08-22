import { Component, OnInit } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {AddEventComponent} from '../../components/add-event/add-event.component';
import {EventService} from '../../services/event.service';
import {Event} from '../../models/Event';
import {ConfirmationModalComponent} from '../confirmation-modal/confirmation-modal.component';
import {ToastrService} from 'ngx-toastr';
import {Location} from '@angular/common';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  bsModalRef: BsModalRef;
  confirmModalRef: BsModalRef;
  eventList: Event[];

  constructor(
    private modalService: BsModalService,
    private eventService: EventService,
    private toastrService: ToastrService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.findAllEvents();
  }

  findAllEvents() {
    this.eventService.findAll()
      .subscribe(res => this.eventList = res);
  }

  openCreateEventModal() {
    this.bsModalRef = this.modalService.show(AddEventComponent);
    this.bsModalRef.content.addedEvent?.subscribe(value => {
      if (value) {
        this.bsModalRef.hide();
        this.toastrService.success('Evénement créé', 'Succès');
        this.findAllEvents();
      }
    });
  }

  subscribePerson(event) {
    const foundIndex = this.eventList.findIndex(elt => elt.title === event.title);
    if (foundIndex > -1) {
      this.eventList[foundIndex].persons += 1;
      this.eventList[foundIndex].subscribed = true;
      this.toastrService.success('Vous êtes inscrit', 'Succès');
    }
  }
  unSubscribePerson(event) {
    const foundIndex = this.eventList.findIndex(elt => elt.title === event.title);
    if (foundIndex > -1) {
      this.eventList[foundIndex].persons -= 1;
      this.eventList[foundIndex].subscribed = false;
      this.toastrService.success('Vous êtes désinscrit', 'Succès');
    }
  }
  deleteEvent(event) {
    this.confirmModalRef = this.modalService.show(ConfirmationModalComponent, {
      initialState: {
        title: 'Confirmation',
        message: 'Etes-vous sur de vouloir supprimer?',
        callback: (result) => {
          if (result === 'yes'){
            const foundIndex = this.eventList.findIndex(elt => elt.title === event.title);
            if (foundIndex > -1) {
              this.eventList.splice(foundIndex, 1);
              this.toastrService.success('Evénement supprimé', 'Succès');
            }
          }
        }
      }
    });
  }

  backClicked() {
    this.location.back();
  }
}
