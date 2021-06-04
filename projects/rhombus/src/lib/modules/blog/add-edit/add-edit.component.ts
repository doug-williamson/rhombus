import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RhBacklogAddEditComponent } from '../../backlog/add-edit/add-edit.component';

export interface AddEditBlogPostDialogData {
  timestamp: any;
  title: string;
  paragraphs: Array<string>;
}

export interface DeleteBlogPostDialogData {
  message: string;
}

@Component({
  selector: 'rh-add-edit-blog',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RhBlogAddEditComponent implements OnInit {

  selectedIndex = 0;
  blogPostForm: FormGroup;
  paragraphs: FormArray;

  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<RhBlogAddEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: AddEditBlogPostDialogData) {}

  ngOnInit(): void {
    this.blogPostForm = this.formBuilder.group({
      timestamp: new FormControl(new Date(this.data.timestamp.seconds * 1000)),
      title: new FormControl(this.data.title),
      paragraphs: new FormArray([]),
    });

    this.paragraphs = this.blogPostForm.get('paragraphs') as FormArray;

    if (this.data.paragraphs) {
      this.data.paragraphs.forEach((element: any) => {
        this.paragraphs.push(this.formBuilder.group({
          text: element.text,
        }));
      });

    } else {
      this.paragraphs.push(this.formBuilder.group({
        text: 'Type here...',
      }));
    }
  }

  onSubmit() {
    this.dialogRef.close(this.blogPostForm.value);
  }

  get blogPostParagraphs() {
    return this.blogPostForm.get('paragraphs') as FormArray;
  }

  addTab() {
    this.paragraphs.push(this.formBuilder.group({
      text: 'Type here...',
    }));
    this.selectedIndex = this.paragraphs.length;
  }

  removeTab(index) {
    this.paragraphs.removeAt(index);
  }
}
