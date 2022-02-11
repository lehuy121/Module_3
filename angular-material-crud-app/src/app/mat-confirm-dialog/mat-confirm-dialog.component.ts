import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-mat-confirm-dialog',
  templateUrl: './mat-confirm-dialog.component.html',
  styleUrls: ['./mat-confirm-dialog.component.scss']
})
export class MatConfirmDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,
              public matDialogRef: MatDialogRef<MatConfirmDialogComponent>) {
  }

  ngOnInit(): void {
  }

  onCloseDeleteDialog() {
    this.matDialogRef.close(false);
  }
}