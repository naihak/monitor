import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Poller } from '../../Poller';

@Component({
  selector: 'app-add-poller',
  templateUrl: './add-poller.component.html',
  styleUrls: ['./add-poller.component.css']
})
export class AddPollerComponent implements OnInit {
  @Output() addPoller: EventEmitter<Poller> = new EventEmitter<Poller>();

  name: string;
  url: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!document.querySelector('form').reportValidity()) {
      return;
    }
    const poller: Poller = {
      name: this.name,
      url: this.url
    };

    this.addPoller.emit(poller);

    this.name = '';
    this.url = '';
  }
}
