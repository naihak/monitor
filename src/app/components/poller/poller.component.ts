import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Poller} from '../../Poller';
import {PollService} from '../../services/poll.service';

@Component({
  selector: 'app-poller',
  templateUrl: './poller.component.html',
  styleUrls: ['./poller.component.css']
})
export class PollerComponent implements OnInit {
  @Input() poller: Poller;
  @Output() deleteItem: EventEmitter<Poller> = new EventEmitter<Poller>();

  status: string;

  constructor(private pollService: PollService) { }

  ngOnInit(): void {
    this.pollService.poll(this.poller.url).subscribe(
      response => this.status = response ? 'OK' : 'FAIL'
    );
  }

  onDelete(): void {
    this.deleteItem.emit(this.poller);
  }

}
