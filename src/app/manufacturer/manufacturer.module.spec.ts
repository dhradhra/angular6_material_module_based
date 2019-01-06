import { ManufacturerModule } from './manufacturer.module';
import {Location} from "@angular/common";
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import {Router,Routes, RouterModule} from "@angular/router";
import { CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { ManufacturerComponent } from './manufacturer.component';
import { Cell2moduleComponent } from './cell2module/cell2module.component';
import { AddModuleComponent } from './add-module/add-module.component';
import { AddArrayComponent } from './add-array/add-array.component';

import { RequestsComponent } from '../components/requests/requests.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ViewCellsComponent } from '../components/view-cells/view-cells.component';
import { TransferModuleComponent } from '../components/transfer-module/transfer-module.component';
import { TransferArrayComponent } from '../components/transfer-array/transfer-array.component';
import { TransferCellComponent } from '../components/transfer-cell/transfer-cell.component';
import { RetrieveModuleComponent } from '../components/retrieve-module/retrieve-module.component';
import { RetrieveArrayComponent } from '../components/retrieve-array/retrieve-array.component';
import { ViewCellHistoryComponent } from '../components/view-cell-history/view-cell-history.component';
import { NotificationsComponent} from '../components/notifications/notifications.component';
import { Module2arrayComponent } from '../components/module2array/module2array.component';
import { MatTableModule } from '@angular/material';


describe('ManufacturerModule', () => {
  let manufacturerModule: ManufacturerModule;
  let location: Location;
  let router: Router;
  let fixture;

  const routes: Routes = [
    {
      path: '', component: DashboardComponent,
      children: [
        {path: '', component: Cell2moduleComponent},
  
        {path: 'cell-to-module', component: Cell2moduleComponent},
        {path: 'module-to-array', component: Module2arrayComponent},
        {path: 'transfer-module', component: TransferModuleComponent},
        {path: 'transfer-array', component: TransferArrayComponent},
        {path: 'view-cells', component: ViewCellsComponent},
  
        
        // {path: 'add-module', component: AddModuleComponent},
        // {path: 'add-array', component: AddArrayComponent},
  
        // {path: 'retrieve-module', component: RetrieveModuleComponent},
        // {path: 'retrieve-array', component: RetrieveArrayComponent},
  
        // {path: 'view-cell-history', component: ViewCellHistoryComponent},
  
        // {path: 'transfer-cell', component: TransferCellComponent},
  
        // {path: 'requests', component: RequestsComponent},
  
        // {path: 'notifications', component: NotificationsComponent}
  
      ]
    }
  ];
  // beforeEach(() => {
  //   manufacturerModule = new ManufacturerModule();
  // });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[MatTableModule,FormsModule,RouterTestingModule.withRoutes(routes)],
      declarations: [ 
        ManufacturerComponent,
          DashboardComponent,
          ViewCellsComponent,
          Module2arrayComponent,
          TransferModuleComponent,
          TransferArrayComponent ,
          Cell2moduleComponent
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

    });

    manufacturerModule = new ManufacturerModule();

    router = TestBed.get(Router); 
    location = TestBed.get(Location); 

    fixture = TestBed.createComponent(ManufacturerComponent); 
    router.initialNavigation(); 

  });

  it('navigate to "" redirects you to /home', fakeAsync(() => { 
    router.navigate(['login']); 
    tick(); 
    expect(location.path()).toBe(''); 
  }));


  it('should create an instance', () => {
    expect(manufacturerModule).toBeTruthy();
  });
});
