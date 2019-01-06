import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GovtComponent } from './govt.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ViewCellHistoryComponent } from '../components/view-cell-history/view-cell-history.component';

const routes: Routes = [
  {
    path: '', component: GovtComponent,
    children: [
      {path: '', component: ViewCellHistoryComponent},
      {path: 'view-cell-history', component: ViewCellHistoryComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GovtRoutingModule { }
