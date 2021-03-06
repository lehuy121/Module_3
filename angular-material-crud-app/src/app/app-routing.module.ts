import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeesComponent} from './employees/employees.component';
import {CustomersComponent} from './customers/customers.component';


const routes: Routes = [
  {
    path: 'employees',
    component: EmployeesComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
