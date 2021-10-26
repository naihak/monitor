import { Component, OnInit } from '@angular/core';
import { Poller } from '../../Poller';
import { POLLERS } from '../../mock-pollers';
import { PollerService } from '../../services/poller.service';

@Component({
  selector: 'app-pollers',
  templateUrl: './pollers.component.html',
  styleUrls: ['./pollers.component.css']
})
export class PollersComponent implements OnInit {
  pollers: Poller[] = POLLERS;

  constructor( private pollerService: PollerService ) { }

  ngOnInit(): void {
  }

  addPoller(poller: Poller): void {
    this.pollerService.addPoller(poller).subscribe((newPoller) => console.log(newPoller));
  }

}
