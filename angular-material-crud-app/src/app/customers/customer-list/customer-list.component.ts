import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {CustomerService} from '../../shared/customer.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {Customer} from '../../shared/customer';
import {CustomerComponent} from '../customer/customer.component';
import {NotificationService} from '../../shared/notification.service';
import {DialogService} from '../../shared/dialog.service';
import * as lodash from 'lodash';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  constructor(private customerService: CustomerService,
              private matDialog: MatDialog,
              private notificationService: NotificationService,
              private dialogService: DialogService) {
  }

  listData = new MatTableDataSource<Customer>();
  displayedColumns: string[] = ['fullName', 'identityCard', 'phone', 'address', 'customerType', 'dayOfBirth', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.customerService.findAll().subscribe((list) => {
      this.listData.data = list;
      this.listData.paginator = this.paginator;
    });
  }

  onCreate() {
    this.customerDialog();
  }

  customerDialog(): void {
    const matDialogConfig = new MatDialogConfig();
    matDialogConfig.disableClose = false;
    matDialogConfig.autoFocus = true;
    matDialogConfig.width = '70%';
    const matDialogRef = this.matDialog.open(CustomerComponent, matDialogConfig);
    matDialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  onDelete(id: number): void {
    this.dialogService.openConfirmDialog('Are you sure to delete ?').afterClosed().subscribe(res => {
      if (res) {
        this.customerService.deleteById(id).subscribe(() => {
          this.listData.data = this.listData.data.filter(customer => customer.id !== id);
          this.notificationService.warn('! Deleted successfully');
        });
      }
    });
  }

  editForm(customer) {
    this.customerService.customerForm.setValue(lodash.omit(customer));
  }

  onEdit(customer) {
    console.log(customer);
    this.editForm(customer);
    this.customerDialog();
  }
}
