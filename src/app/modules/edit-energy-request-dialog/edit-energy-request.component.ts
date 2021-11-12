import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Consumer } from 'src/app/Model/consumer';
import { ConsumerService } from 'src/app/services/consumer.service';

@Component({
  selector: 'app-edit-energy-request',
  templateUrl: './edit-energy-request.component.html',
  styleUrls: ['./edit-energy-request.component.scss'],
})
export class EditEnergyRequestComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public item: Consumer,
    public dialogref: MatDialogRef<EditEnergyRequestComponent>
  ) {}

  

  ngOnInit(): void {}
  
}
