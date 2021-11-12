import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Consumer } from 'src/app/Model/consumer';

import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-energy-request',
  templateUrl: './post-energy-request.component.html',
  styleUrls: ['./post-energy-request.component.scss'],
})
export class PostEnergyRequestComponent implements OnInit {
  @Output() onAddConsumer: EventEmitter<Consumer> = new EventEmitter();
  id!: string;
  name!: string;
  kwh!: string;
  isAvailable!: boolean;

  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    if (!this.name || !this.kwh) {
      alert('Please enter full details');
      return;
    }
    const newConsumer: any = {
      name: this.name,
      kwh: this.kwh,
      isAvailable: true,
    };

    this.onAddConsumer.emit(newConsumer);

    (this.name = ''), (this.kwh = ''), (this.isAvailable = true);
  }
}
