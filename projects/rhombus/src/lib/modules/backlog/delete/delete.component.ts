import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RhBacklogAddEditComponent } from '../add-edit/add-edit.component';
import { DeleteDialogData } from '../backlog.component';

@Component({
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class RhBacklogDeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RhBacklogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteDialogData) {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void { }

}
