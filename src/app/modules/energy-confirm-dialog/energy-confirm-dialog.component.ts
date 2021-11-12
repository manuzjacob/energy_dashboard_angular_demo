import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Consumer } from 'src/app/Model/consumer';

@Component({
  selector: 'app-energy-confirm-dialog',
  templateUrl: './energy-confirm-dialog.component.html',
  styleUrls: ['./energy-confirm-dialog.component.scss'],
})
export class EnergyConfirmDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public item: Consumer,
    public dialogref:MatDialogRef<EnergyConfirmDialogComponent>
  ) {}
  

  ngOnInit(): void {
  }
  

}


