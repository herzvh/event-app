import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Event} from '../models/Event';
import {EVENTS} from '../constants/events';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  findAll(): Observable<Event[]> {
    return of(EVENTS);
  }

  addEvent(data: Event): void {
    EVENTS.push(data);
  }
}
