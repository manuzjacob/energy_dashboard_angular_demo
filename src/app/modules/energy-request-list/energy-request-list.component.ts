import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Consumer } from 'src/app/Model/consumer';
import { ConsumerService } from 'src/app/services/consumer.service';

@Component({
  selector: 'app-energy-request-list',
  templateUrl: './energy-request-list.component.html',
  styleUrls: ['./energy-request-list.component.scss'],
})
export class EnergyRequestListComponent implements OnInit {
  @Input()
  item!: Consumer;
  @Output() onToggleMove: EventEmitter<Consumer> = new EventEmitter();

  constructor(private consumerservice: ConsumerService) {}
  ngOnInit(): void {}
  openConfirmDialog(item: Consumer) {
    this.consumerservice
      .confirmDialog(item)
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.onToggleMove.emit(item);
        }
      });
  }

  editUser(item: Consumer) {
    this.consumerservice
      .editConsumerDialog(item)
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.consumerservice.updateConsumer(item).subscribe();
        }
      });
  }
}
