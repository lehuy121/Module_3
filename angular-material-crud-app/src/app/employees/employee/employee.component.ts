import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployeeService} from '../../shared/employee.service';
import {FormGroupDirective} from '@angular/forms';
import {DepartmentService} from '../../shared/department.service';
import {NotificationService} from '../../shared/notification.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(private employeeService: EmployeeService,
              public departmentService: DepartmentService,
              private notificationService: NotificationService,
              public matDialogRef: MatDialogRef<EmployeeComponent>
  ) {
  }

  employeeForm() {
    return this.employeeService.form;
  }

  ngOnInit(): void {
    this.employeeService.getEmployees();
  }

  onClear(): void {
    this.formGroupDirective.resetForm();
  }

  onSubmit() {
    if (this.employeeForm().valid) {
      if (!this.employeeForm().get('$key').value) {
        this.employeeService.insertEmployee(this.employeeForm().value);
        this.onClear();
        this.notificationService.success(':: Create successfully');
        this.onCloseDialog();
      } else {
        this.employeeService.updateEmployee(this.employeeForm().value);
        this.onClear();
        this.notificationService.success(':: Edit successfully');
        this.onCloseDialog();
      }
    }
  }

  onCloseDialog() {
    this.employeeForm().reset();
    this.matDialogRef.close();
  }
}
