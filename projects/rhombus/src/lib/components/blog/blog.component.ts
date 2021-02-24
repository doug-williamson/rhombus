import { Component, Input, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPost } from '../../models/post';
import { RhAuthService } from '../../services/auth.service';
import { RhBlogService } from '../../services/blog.service';
import { RhBlogAddEditComponent } from './add-edit/add-edit.component';
import { RhBlogDeleteComponent } from './delete/delete.component';
import { RhBlogPostComponent } from './read/read.component';

export interface BlogDialogData {
  timestamp: string;
  title: string;
  paragraphs: Array<string>;
}

export interface BlogDeleteDialogData {
  message: string;
}

@Component({
  selector: 'rh-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class RhBlogComponent implements OnInit {

  @Input()
  readOnly: boolean = undefined;

  displayedColumns: string[] = ['timestamp', 'title', 'admin'];
  posts: IPost[];
  compact$: Observable<boolean>;
  routeQueryParams$: Subscription;

  // tslint:disable-next-line:max-line-length
  constructor(private media: MediaObserver, private authService: RhAuthService, private blogService: RhBlogService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.compact$ = this.media.asObservable().pipe(
      map(mediaMatch => {
        return !mediaMatch.find(change => change.mqAlias === 'gt-xs');
      }),
    );

    this.authService.user$.subscribe(res => {
      if (this.readOnly === undefined) {
        this.readOnly = !this.authService.canEdit(res);
      }
    });

    this.blogService.getPosts$().subscribe(res => {
      this.posts = res;
    });
  }

  readPost(post) {
    const dialogRef = this.dialog.open(RhBlogPostComponent, {
      data: { timestamp: post.timestamp, title: post.title, paragraphs: post.paragraphs },
    });

    dialogRef.afterClosed().subscribe(result => {
      //
    });
  }

  addNew() {
    const dialogRef = this.dialog.open(RhBlogAddEditComponent, {
      data: { timestamp: new Date(), title: null, paragraphs: null },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.blogService.createBlogPost(result);
      }

    });
  }

  delete(element) {
    const dialogRef = this.dialog.open(RhBlogDeleteComponent, {
      width: '350px',
      data: { message: 'Are you sure you want to delete: ' + element.title + '?' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.blogService.deleteBlogPost(element.id);
      }

    });
  }

  editPost(post) {
    const dialogRef = this.dialog.open(RhBlogAddEditComponent, {
      data: { timestamp: post.timestamp, title: post.title, paragraphs: post.paragraphs },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.blogService.updateBlogPost(post.id, result);
      }

    });
  }

}
