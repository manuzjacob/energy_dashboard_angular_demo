import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Consumer } from 'src/app/Model/consumer';


@Component({
  selector: 'app-ongoing-energy-trade',
  templateUrl: './ongoing-energy-trade.component.html',
  styleUrls: ['./ongoing-energy-trade.component.scss'],
})
export class OngoingEnergyTradeComponent implements OnInit {
  @Input()
  item!: Consumer;
  @Output()
  onDeleteConsumer: EventEmitter<Consumer> = new EventEmitter

  constructor() {}

  ngOnInit(): void {

    setTimeout(() => {
      this.onDeleteConsumer.emit(this.item)
    }, 10000
    );
  }
  
}
