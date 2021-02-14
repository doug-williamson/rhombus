import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LNAddEditDialogData } from '../latest-news.component';

@Component({
  selector: 'rh-latest-news-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],
})
export class RhLatestNewsAddEditComponent implements OnInit {
  latestNewsForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<RhLatestNewsAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LNAddEditDialogData) {
  }

  ngOnInit(): void {
    this.latestNewsForm = new FormGroup({
      timestamp: new FormControl(new Date(this.data.timestamp)),
      title: new FormControl(this.data.title, [Validators.required, Validators.minLength(4), Validators.maxLength(100)]),
      description: new FormControl(this.data.description, [Validators.required, Validators.minLength(4)]),
    });
   }

  onSubmit() {
    this.dialogRef.close(this.latestNewsForm.value);
  }
}
