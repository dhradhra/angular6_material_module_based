import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes =[
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'supplier', loadChildren: './suppliers/suppliers.module#SuppliersModule',
  canLoad: [AuthGuard],
  data: {
    role: 'supplier'
  }},
  {path: 'manufacturer', loadChildren: './manufacturer/manufacturer.module#ManufacturerModule',
  canLoad: [AuthGuard],
  data: {
    role: 'manufacturer'
  }},
  {path: 'repairshop', loadChildren: './dealer-repairer/dealer-repairer.module#DealerRepairerModule',
  canLoad: [AuthGuard],
  data: {
    role: 'repairshop'
  }},
  {path: 'dealership', loadChildren: './dealer-repairer/dealer-repairer.module#DealerRepairerModule',
  canLoad: [AuthGuard],
  data: {
    role: 'dealership'
  }},
  {path: 'recyclingCenter', loadChildren: './recycler/recycler.module#RecyclerModule',
  canLoad: [AuthGuard],
  data: {
    role: 'recyclingCenter'
  }},
  {path: 'government', loadChildren: './govt/govt.module#GovtModule',
  canLoad: [AuthGuard],
  data: {
    role: 'government'
  }},
  {path: 'fcsd', loadChildren: './fcsd/fcsd.module#FcsdModule',
  canLoad: [AuthGuard],
  data: {
    role: 'fcsd'
  }},
  {path: '**', redirectTo: 'login'}
]



@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
