import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {Event} from '../../models/Event';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  @Output()
  addedEvent = new EventEmitter<boolean>();
  newEvent: Event = new Event(-1, '', '', new Date(), '', '');
  constructor(
    public bsModalRef: BsModalRef,
    public eventService: EventService
  ) { }

  ngOnInit(): void {
  }

  addNewEvent() {
    this.eventService.addEvent(this.newEvent);
    this.addedEvent.emit(true);
  }
}
