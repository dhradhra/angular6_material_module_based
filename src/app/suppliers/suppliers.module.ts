// Angular Core Dependancies

import { NgModule } from '@angular/core';

// Import Routing Module for this Module
import { SuppliersRoutingModule } from './suppliers-routing.module';

// Local Components of this Module
import { SuppliersComponent } from './suppliers.component';
import { AddCellComponent } from './add-cell/add-cell.component';
import { SharedModule } from '../shared.module';


@NgModule({
  imports: [
    SuppliersRoutingModule,
    SharedModule
  ],
  declarations: [
    SuppliersComponent,
    AddCellComponent
  ]
})
export class SuppliersModule { }
