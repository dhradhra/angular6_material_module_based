import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManufacturerComponent } from './manufacturer.component';
import { Cell2moduleComponent } from './cell2module/cell2module.component';
import { AddModuleComponent } from './add-module/add-module.component';
import { AddArrayComponent } from './add-array/add-array.component';

import { RequestsComponent } from '../components/requests/requests.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ViewCellsComponent } from '../components/view-cells/view-cells.component';
import { TransferModuleComponent } from '../components/transfer-module/transfer-module.component';
import { TransferArrayComponent } from '../components/transfer-array/transfer-array.component';
import { TransferCellComponent } from '../components/transfer-cell/transfer-cell.component';
import { RetrieveModuleComponent } from '../components/retrieve-module/retrieve-module.component';
import { RetrieveArrayComponent } from '../components/retrieve-array/retrieve-array.component';
import { ViewCellHistoryComponent } from '../components/view-cell-history/view-cell-history.component';
import { NotificationsComponent} from '../components/notifications/notifications.component';
import { Module2arrayComponent } from '../components/module2array/module2array.component';

const routes: Routes = [
  {
    path: '', component: ManufacturerComponent,
    children: [
      {path: '', component: Cell2moduleComponent},

      {path: 'cell-to-module', component: Cell2moduleComponent},
      {path: 'module-to-array', component: Module2arrayComponent},

      {path: 'add-module', component: AddModuleComponent},
      {path: 'add-array', component: AddArrayComponent},

      {path: 'retrieve-module', component: RetrieveModuleComponent},
      {path: 'retrieve-array', component: RetrieveArrayComponent},

      {path: 'view-cell-history', component: ViewCellHistoryComponent},

      {path: 'transfer-cell', component: TransferCellComponent},
      {path: 'transfer-module', component: TransferModuleComponent},
      {path: 'transfer-array', component: TransferArrayComponent},

      {path: 'view-cells', component: ViewCellsComponent},
      {path: 'requests', component: RequestsComponent},

      {path: 'notifications', component: NotificationsComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufacturerRoutingModule { }
