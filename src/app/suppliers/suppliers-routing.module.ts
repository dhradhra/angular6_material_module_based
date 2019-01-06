// Angular Core
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuppliersComponent } from './suppliers.component';
import { AddCellComponent } from './add-cell/add-cell.component';
import { RequestsComponent } from '../components/requests/requests.component';
import { ViewCellsComponent } from '../components/view-cells/view-cells.component';
import { TransferCellComponent } from '../components/transfer-cell/transfer-cell.component';
import { TransferModuleComponent } from '../components/transfer-module/transfer-module.component';
import { TransferArrayComponent } from '../components/transfer-array/transfer-array.component';
import { ViewCellHistoryComponent } from '../components/view-cell-history/view-cell-history.component';
import { NotificationsComponent} from '../components/notifications/notifications.component';

const routes: Routes = [
  {
    path: '', component: SuppliersComponent,
    children: [
      {path: '', component: AddCellComponent},
      {path: 'add-cell', component: AddCellComponent},
      {path: 'transfer-cell', component: TransferCellComponent},
      {path: 'transfer-module', component: TransferModuleComponent},
      {path: 'view-cell-history', component: ViewCellHistoryComponent},
      {path: 'transfer-array', component: TransferArrayComponent},
      {path: 'cells', component: ViewCellsComponent},
      {path: 'requests', component: RequestsComponent},
      {path: 'notifications', component: NotificationsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliersRoutingModule { }
