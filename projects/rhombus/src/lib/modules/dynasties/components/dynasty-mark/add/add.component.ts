import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Game, GamesService } from '../../../services/games.service';
import { DynastyMarkAddEditData } from '../dynasty-mark.component';

@Component({
  selector: 'rh-dynasty-mark-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class RhDynastyMarkAddComponent implements OnInit {

  version: number;
  dynastyMarkForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<RhDynastyMarkAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DynastyMarkAddEditData) {
  }

  ngOnInit(): void {
    this.dynastyMarkForm = new FormGroup({
      version: new FormControl(this.data.version),
    });

    this.version = this.data.version;
  }

  onSubmit() {
    this.dialogRef.close(this.dynastyMarkForm.value);
  }

}
