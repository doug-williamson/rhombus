import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BlogDialogData } from '../blog.component';

@Component({
  selector: 'rh-blog-post',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class RhBlogPostComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RhBlogPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BlogDialogData) {
  }

  ngOnInit(): void {
  }

}
