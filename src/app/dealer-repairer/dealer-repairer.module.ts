// Angular Core
import { NgModule } from '@angular/core';

// Routing for this module
import { DealerRepairerRoutingModule } from './dealer-repairer-routing.module';

import { Module2arrayComponent } from '../components/module2array/module2array.component';
import { DealerRepairerComponent } from './dealer-repairer.component';
import { SharedModule } from '../shared.module';


@NgModule({
  imports: [
    SharedModule,
    DealerRepairerRoutingModule
  ],
  declarations: [
    DealerRepairerComponent,
    Module2arrayComponent
  ]
})
export class DealerRepairerModule { }
