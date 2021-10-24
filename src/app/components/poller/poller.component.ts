import {Component, Input, OnInit} from '@angular/core';
import {Poller} from '../../Poller';

@Component({
  selector: 'app-poller',
  templateUrl: './poller.component.html',
  styleUrls: ['./poller.component.css']
})
export class PollerComponent implements OnInit {
  @Input() poller: Poller;

  constructor() { }

  ngOnInit(): void {
  }

}
