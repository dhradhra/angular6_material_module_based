import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecyclerComponent } from './recycler.component';
import { RequestsComponent } from '../components/requests/requests.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ViewCellsComponent } from '../components/view-cells/view-cells.component';
import { ViewCellHistoryComponent } from '../components/view-cell-history/view-cell-history.component';

const routes: Routes = [
  {
    path: '', component: RecyclerComponent,
    children: [
      {path: '', component: RequestsComponent},

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
export class RecyclerRoutingModule { }
