import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmployeesComponent} from './employees/employees.component';
import {EmployeeComponent} from './employees/employee/employee.component';

import {MaterialModule} from './material/material.module';
import {EmployeeService} from './shared/employee.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DatePipe} from '@angular/common';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import {DepartmentService} from './shared/department.service';
import {EmployeeListComponent} from './employees/employee-list/employee-list.component';
import {MatConfirmDialogComponent} from './mat-confirm-dialog/mat-confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    MatConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule
  ],
  providers: [EmployeeService, DatePipe, DepartmentService],
  bootstrap: [AppComponent],
  entryComponents: [EmployeeComponent, MatConfirmDialogComponent]
})
export class AppModule {
}
