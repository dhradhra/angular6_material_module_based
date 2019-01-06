import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatGridListModule,
  MatListModule,
  MatTableModule,
  MatSelectModule,
  MatTabsModule,
  MatTooltipModule,
  MatRadioModule,
  MatBadgeModule
} from '@angular/material';

import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { RequestsComponent } from './components/requests/requests.component';
import { TransferArrayComponent } from './components/transfer-array/transfer-array.component';
import { TransferCellComponent } from './components/transfer-cell/transfer-cell.component';
import { TransferModuleComponent } from './components/transfer-module/transfer-module.component';
import { ViewCellsComponent } from './components/view-cells/view-cells.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { RetrieveModuleComponent } from './components/retrieve-module/retrieve-module.component';
import { RetrieveArrayComponent } from './components/retrieve-array/retrieve-array.component';
import { ViewCellHistoryComponent } from './components/view-cell-history/view-cell-history.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SweetAlert2Module,
    RouterModule,
    
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatTableModule,
    MatSelectModule,
    MatTabsModule,
    MatTooltipModule,
    MatRadioModule,
    MatBadgeModule
  ],
  declarations: [
    HeaderComponent,
    ProfileComponent,
    MainComponent,
    TopnavComponent,
    DashboardComponent,
    RetrieveArrayComponent,
    RetrieveModuleComponent,
    NotificationsComponent,

    RequestsComponent,
    TransferArrayComponent,
    TransferCellComponent,
    TransferModuleComponent,
    ViewCellHistoryComponent,
    ViewCellsComponent
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SweetAlert2Module,
    RouterModule,

    HeaderComponent,
    ProfileComponent,
    MainComponent,
    TopnavComponent,
    DashboardComponent,
    NotificationsComponent,

    RequestsComponent,
    TransferArrayComponent,
    TransferCellComponent,
    TransferModuleComponent,
    ViewCellsComponent,
    
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatTableModule,
    MatSelectModule,
    MatTabsModule,
    MatTooltipModule,
    MatRadioModule,
    MatBadgeModule

  ]
})
export class SharedModule {}
