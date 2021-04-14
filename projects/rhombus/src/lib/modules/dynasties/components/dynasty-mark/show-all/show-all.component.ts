import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDynastyMark } from '../../../models/dynasty';
import { RhDynastiesAddEditComponent } from '../../dynasties/add-edit/add-edit.component';
import { DynastiesAddEditDialogData } from '../../dynasties/dynasties.component';

@Component({
  selector: 'rh-dynasty-mark-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.scss'],
})
export class RhDynastyMarkShowAllComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RhDynastiesAddEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IDynastyMark[]) { }

  ngOnInit(): void {
  }

}
