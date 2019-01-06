// Angular Dependancies
import { NgModule } from '@angular/core';

import { FcsdRoutingModule } from './fcsd-routing.module';

// Pages for current module
import { FcsdComponent } from './fcsd.component';
import { RecallComponent } from './recall/recall.component';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    SharedModule,
    FcsdRoutingModule
  ],
  declarations: [
    FcsdComponent,
    RecallComponent
  ]
})
export class FcsdModule { }
