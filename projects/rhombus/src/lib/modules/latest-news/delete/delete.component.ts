import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RhLatestNewsAddEditComponent } from '../add-edit/add-edit.component';
import { LNDeleteDialogData } from '../latest-news.component';

@Component({
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class RhLatestNewsDeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RhLatestNewsAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LNDeleteDialogData) {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void { }

}
