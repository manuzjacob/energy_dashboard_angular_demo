import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostEnergyRequestComponent } from 'src/app/modules/post-energy-request/post-energy-request.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EnergyRequestListComponent } from 'src/app/modules/energy-request-list/energy-request-list.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OngoingEnergyTradeComponent } from 'src/app/modules/ongoing-energy-trade/ongoing-energy-trade.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { EnergyConfirmDialogComponent } from 'src/app/modules/energy-confirm-dialog/energy-confirm-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CountdownModule } from 'ngx-countdown';
import { EditEnergyRequestComponent } from 'src/app/modules/edit-energy-request-dialog/edit-energy-request.component';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostEnergyRequestComponent,
    EnergyRequestListComponent,
    OngoingEnergyTradeComponent,
    EnergyConfirmDialogComponent,
    EditEnergyRequestComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    Ng2SearchPipeModule,
    CountdownModule,
    ReactiveFormsModule
  ],
  exports: [
    EnergyRequestListComponent,
    OngoingEnergyTradeComponent,
    PostEnergyRequestComponent
  ],
  providers: [],
})
export class DefaultModule {}
