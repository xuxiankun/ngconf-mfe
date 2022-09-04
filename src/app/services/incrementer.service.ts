import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncrementerService {

  constructor() { }
  broadcastCount(value: number): void {
    const eventData = {
      counter: value,
    };
    const event = new CustomEvent('mr-clean-counter', {
      detail: eventData,
      bubbles: true,
    });
    dispatchEvent(event);
  }

}
