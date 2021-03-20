import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DynastiesDeleteDialogData } from '../dynasties.component';

@Component({
  selector: 'rh-dynasties-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class RhDynastiesDeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RhDynastiesDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DynastiesDeleteDialogData) {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void { }

}
