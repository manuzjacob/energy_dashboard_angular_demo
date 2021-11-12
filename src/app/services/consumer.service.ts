import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Consumer } from '../Model/consumer';
import { MatDialog } from '@angular/material/dialog';
import { EnergyConfirmDialogComponent } from '../modules/energy-confirm-dialog/energy-confirm-dialog.component';
import { EditEnergyRequestComponent } from '../modules/edit-energy-request-dialog/edit-energy-request.component';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ConsumerService {
  private apiUrl = 'http://localhost:3000/consumers';

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  confirmDialog(item: Consumer) {
    return this.dialog.open(EnergyConfirmDialogComponent, {
      width: '500px',
      disableClose: true,
      data: item
    });
  }

  editConsumerDialog(item: Consumer) {
    return this.dialog.open(EditEnergyRequestComponent, {
      width: '500',
      data: item
    });
  }

  getConsumerList(): Observable<Consumer[]> {
    return this.http.get<Consumer[]>(`${this.apiUrl}?isAvailable=true`);
  }

  getOnGoingTrade(): Observable<Consumer[]> {
    return this.http.get<Consumer[]>(`${this.apiUrl}?isAvailable=false`);
  }

  addConsumer(item: Consumer): Observable<Consumer> {
    return this.http.post<Consumer>(this.apiUrl, item, httpOptions);
  }

  deleteConsumer(item: Consumer): Observable<Consumer> {
    return this.http.delete<Consumer>(`${this.apiUrl}/${item.id}`);
  }

  updateConsumer(item: Consumer): Observable<Consumer> {
    console.log(item);
    return this.http.put<Consumer>(
      `${this.apiUrl}/${item.id}`,
      item,
      httpOptions
    );
  }
}
