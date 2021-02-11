import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddEditDialogData } from '../backlog.component';

@Component({
  selector: 'rh-backlog-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],
})
export class RhBacklogAddEditComponent implements OnInit {
  backlogForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<RhBacklogAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddEditDialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.backlogForm = new FormGroup({
      status: new FormControl('1'),
      text: new FormControl(this.data.text, [Validators.required, Validators.minLength(4), Validators.maxLength(100)]),
    });
   }

  onSubmit() {
    this.dialogRef.close(this.backlogForm.value);
  }
}
