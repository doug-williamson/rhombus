import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DynastyMarkYearWeekAddData } from '../weeks.component';

@Component({
  selector: 'rh-dynasty-mark-year-week-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],
})
export class RhDynastyMarkYearWeekAddEditComponent implements OnInit {

  dynastyMarkYearWeekForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<RhDynastyMarkYearWeekAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DynastyMarkYearWeekAddData) {
  }

  ngOnInit(): void {
    this.dynastyMarkYearWeekForm = new FormGroup({
      week: new FormControl(this.data.week),
      home: new FormControl(this.data.home),
      opponent: new FormControl(this.data.opponent),
      ourScore: new FormControl(this.data.ourScore),
      theirScore: new FormControl(this.data.theirScore),
      link: new FormControl(this.data.link),
      result: new FormControl(this.data.result),
    });
   }

  onSubmit() {
    this.dialogRef.close(this.dynastyMarkYearWeekForm.value);
  }

}
