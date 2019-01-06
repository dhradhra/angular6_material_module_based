import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestsComponent } from '../components/requests/requests.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ViewCellsComponent } from '../components/view-cells/view-cells.component';
import { TransferModuleComponent } from '../components/transfer-module/transfer-module.component';
import { TransferArrayComponent } from '../components/transfer-array/transfer-array.component';
import { TransferCellComponent } from '../components/transfer-cell/transfer-cell.component';
import { DealerRepairerComponent } from './dealer-repairer.component';
import { RetrieveModuleComponent } from '../components/retrieve-module/retrieve-module.component';
import { RetrieveArrayComponent } from '../components/retrieve-array/retrieve-array.component';
import { ViewCellHistoryComponent } from '../components/view-cell-history/view-cell-history.component';
import { Module2arrayComponent } from '../components/module2array/module2array.component';

const routes: Routes = [
  {
    path: '', component: DealerRepairerComponent,
    children: [
      
      {path: '', component: TransferCellComponent},
      
      {path: 'module-to-array', component: Module2arrayComponent},

      {path: 'transfer-cell', component: TransferCellComponent},
      {path: 'transfer-module', component: TransferModuleComponent},
      {path: 'transfer-array', component: TransferArrayComponent},

      {path: 'retrieve-module', component: RetrieveModuleComponent},
      {path: 'retrieve-array', component: RetrieveArrayComponent},

      {path: 'view-cells', component: ViewCellsComponent},
      {path: 'requests', component: RequestsComponent},
      {path: 'view-cell-history', component: ViewCellHistoryComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealerRepairerRoutingModule { }
