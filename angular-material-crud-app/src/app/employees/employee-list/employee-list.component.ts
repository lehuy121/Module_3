import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployeeService} from '../../shared/employee.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {DepartmentService} from '../../shared/department.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {EmployeeComponent} from '../employee/employee.component';
import {NotificationService} from '../../shared/notification.service';
import {DialogService} from '../../shared/dialog.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeService,
              private departmentService: DepartmentService,
              private matDialog: MatDialog,
              private notificationService: NotificationService,
              private dialogService: DialogService) {
  }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['fullName', 'email', 'mobile', 'city', 'departmentName', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(list => {
      const array = list.map(item => {
        const departmentName = this.departmentService.getDepartmentName(item.payload.val().department);
        return {
          $key: item.key,
          departmentName,
          ...item.payload.val()
        };
      });
      this.listData = new MatTableDataSource<any>(array);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
      this.listData.filterPredicate = (data, filter) => {
        return this.displayedColumns.some(element => {
          return element !== 'actions' && data[element].toLowerCase().indexOf(filter) !== -1;
        });
      };
    });
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toUpperCase();
  }

  onCreate() {
    this.configMatDialog();
  }

  onEdit(row) {
    console.log(row);
    this.employeeService.editForm(row);
    this.configMatDialog();
  }

  onDelete($key) {
    // if (confirm('Are you sure to delete ?')) {
    //   this.employeeService.deleteEmployee($key);
    //   this.notificationService.warn('! Deleted successfully');
    // }
    this.dialogService.openConfirmDialog('Are you sure to delete ?').afterClosed().subscribe(res => {
      console.log(res);
      if (res) {
        this.employeeService.deleteEmployee($key);
        this.notificationService.warn('! Deleted successfully');
      }
    });
  }

  configMatDialog(): void {
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.disableClose = false;
    matDialogConfig.autoFocus = true;
    matDialogConfig.width = '70%';
    this.matDialog.open(EmployeeComponent, matDialogConfig);
  }
}
