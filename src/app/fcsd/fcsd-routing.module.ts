import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FcsdComponent } from './fcsd.component';
import { RecallComponent } from './recall/recall.component';
import { ViewCellHistoryComponent } from '../components/view-cell-history/view-cell-history.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: FcsdComponent,
    children: [
      {path: '', component: RecallComponent},
      {path: 'recall', component: RecallComponent},
      {path: 'view-cell-history', component: ViewCellHistoryComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FcsdRoutingModule { }
