import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DynastyMarkYearAddData } from '../years.component';

@Component({
  selector: 'rh-dynasty-mark-year-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class RhDynastyMarkYearAddComponent implements OnInit {

  dynastyMarkYearForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<RhDynastyMarkYearAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DynastyMarkYearAddData) {
  }

  ngOnInit(): void {
    this.dynastyMarkYearForm = new FormGroup({
      year: new FormControl(this.data.year),
      team: new FormControl(this.data.team),
      positionId: new FormControl(this.data.positionId),
    });
   }

  onSubmit() {
    this.dialogRef.close(this.dynastyMarkYearForm.value);
  }

}
