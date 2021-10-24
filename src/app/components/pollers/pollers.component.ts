import { Component, OnInit } from '@angular/core';
import {Poller} from '../../Poller';
import {POLLERS} from '../../mock-pollers';

@Component({
  selector: 'app-pollers',
  templateUrl: './pollers.component.html',
  styleUrls: ['./pollers.component.css']
})
export class PollersComponent implements OnInit {
  pollers: Poller[] = POLLERS;

  constructor() { }

  ngOnInit(): void {
  }

}
