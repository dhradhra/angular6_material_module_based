// Angular Dependacies
import { NgModule } from '@angular/core';

// Routing for current module
import { GovtRoutingModule } from './govt-routing.module';

// Pages for current module
import { GovtComponent } from './govt.component';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    SharedModule,
    GovtRoutingModule
  ],
  declarations: [
    GovtComponent
  ]
})
export class GovtModule { }
