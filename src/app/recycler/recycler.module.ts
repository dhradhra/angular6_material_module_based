// Angular Dependancies
import { NgModule } from '@angular/core';

// Pages for current module
import { RecyclerRoutingModule } from './recycler-routing.module';
import { RecyclerComponent } from './recycler.component';

import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    SharedModule,
    RecyclerRoutingModule,
],
  declarations: [
    RecyclerComponent
  ]
})
export class RecyclerModule { }
