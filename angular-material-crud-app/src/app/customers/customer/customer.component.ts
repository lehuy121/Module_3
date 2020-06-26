import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomerService} from '../../shared/customer.service';
import {FormBuilder, FormGroupDirective} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {MatDialogRef} from '@angular/material/dialog';
import {NotificationService} from '../../shared/notification.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  // customerForm: FormGroup;
  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(public customerService: CustomerService,
              private formBuilder: FormBuilder,
              private datePipe: DatePipe,
              public matDialogRef: MatDialogRef<CustomerComponent>,
              private notificationService: NotificationService
  ) {
  }

  ngOnInit(): void {
    // console.log(this.customerService.customerForm.get('dayOfBirth').value);
    // this.date.setValue(new Date(this.customerService.customerForm.get('dayOfBirth').value));
    // this.customerForm = this.formBuilder.group({
    //   id: [''],
    //   fullName: ['', Validators.required],
    //   dayOfBirth: [''],
    //   identityCard: [''],
    //   phone: [''],
    //   address: [''],
    //   customerType: [''],
    // });
  }

  onClear(): void {
    // this.customerService.customerForm.reset();
    this.customerService.initializeFormGroup();
    // this.formGroupDirective.resetForm();
  }

  onSubmit(): void {
    // this.customerService.customerForm.patchValue({
    //   dayOfBirth: this.datePipe.transform(this.customerService.customerForm.get('dayOfBirth').value, 'yyyy-MM-dd')
    // });


    if (this.customerService.customerForm.valid) {
      if (!this.customerService.customerForm.get('id').value) {
        this.customerService.create(this.customerService.customerForm.value).subscribe(() => {
          this.notificationService.success('Create successfully');
          this.onCloseDialog();
        });
      } else {
        this.customerService.update(this.customerService.customerForm.value).subscribe(() => {
          this.notificationService.success('Update successfully');
          this.customerService.customerForm.reset();
          this.onCloseDialog();
        });
      }
    }
  }

  onCloseDialog() {
    this.matDialogRef.close();
  }
}
