import { Component, OnInit } from '@angular/core';
import { Poller } from '../../Poller';
import { PollerService } from '../../services/poller.service';

@Component({
  selector: 'app-pollers',
  templateUrl: './pollers.component.html',
  styleUrls: ['./pollers.component.css']
})
export class PollersComponent implements OnInit {
  pollers: Poller[];

  constructor( private pollerService: PollerService ) { }

  ngOnInit(): void {
    this.fetchPollers();
  }

  fetchPollers(): void {
    this.pollerService.getPollers().subscribe(
      (pollers) => this.pollers = pollers
    );
  }

  addPoller(poller: Poller): void {
    this.pollerService.addPoller(poller).subscribe(
      (newPoller) => this.pollers.push(newPoller)
    );
  }

  deletePoller(poller: Poller): void {
    this.pollerService.deletePoller(poller).subscribe(
      (deleted) => {
        if (deleted !== null) {
          this.pollers = this.pollers.filter(
            p => p.id !== deleted.id
          );
        }
      }
    );
  }
}
