import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteDialogData } from '../../backlog/backlog.component';

@Component({
  selector: 'rh-blog-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class RhBlogDeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RhBlogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteDialogData) {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void { }
}
