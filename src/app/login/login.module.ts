// Angular Dependancies
import { NgModule } from '@angular/core';

// import { ManufacturerRoutingModule } from './manufacturer-routing.module';

// // Pages of current module
// import { ManufacturerComponent } from './manufacturer.component';
// import { Cell2moduleComponent } from './cell2module/cell2module.component';
// import { Module2arrayComponent } from '../components/module2array/module2array.component';
// import { AddModuleComponent } from './add-module/add-module.component';
// import { AddArrayComponent } from './add-array/add-array.component';
import { HeaderComponent } from '../components/header/header.component';

import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
  ],
  declarations: [
    HeaderComponent
  ]
})
export class LoginModule { }
