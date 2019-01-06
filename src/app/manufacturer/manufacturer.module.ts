// Angular Dependancies
import { NgModule } from '@angular/core';

import { ManufacturerRoutingModule } from './manufacturer-routing.module';

// Pages of current module
import { ManufacturerComponent } from './manufacturer.component';
import { Cell2moduleComponent } from './cell2module/cell2module.component';
import { Module2arrayComponent } from '../components/module2array/module2array.component';
import { AddModuleComponent } from './add-module/add-module.component';
import { AddArrayComponent } from './add-array/add-array.component';
import { MatTableModule } from '@angular/material';

import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    MatTableModule,
    SharedModule,
    ManufacturerRoutingModule,
  ],
  declarations: [
    ManufacturerComponent,
    Cell2moduleComponent,
    Module2arrayComponent,
    AddModuleComponent,
    AddArrayComponent
  ]
})
export class ManufacturerModule { }
