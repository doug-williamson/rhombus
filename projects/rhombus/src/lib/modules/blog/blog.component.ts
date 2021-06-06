import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { RhAuthService } from '../auth/auth.service';
import { RhBlogAddEditComponent } from './add-edit/add-edit.component';
import { RhBlogService } from './blog.service';
import { RhBlogDeleteComponent } from './delete/delete.component';
import { IPost } from './post';

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

    isOwner = false;
    displayedColumns: string[] = ['timestamp', 'title', 'admin'];
    posts: IPost[];
    compact$: Observable<boolean>;

    constructor(private media: MediaObserver, private dialog: MatDialog, private authService: RhAuthService, private router: Router, private blogService: RhBlogService) {

    }

    ngOnInit(): void {
        this.compact$ = this.media.asObservable().pipe(
            map(mediaMatch => {
                return !mediaMatch.find(change => change.mqAlias === 'gt-xs');
            }),
        );

        this.authService.user$.subscribe(res => {
            this.isOwner = this.authService.isOwner(res);
        });

        this.blogService.getPosts$().subscribe(res => {
            this.posts = res;
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

    readPost(post: IPost) {
        this.router.navigateByUrl(`/rhombus/dynasties/${ post.id }`);
    }

}
