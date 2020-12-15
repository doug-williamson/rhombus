import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPost } from '../post/post';

@Component({
  selector: 'rh-blog-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class RhBlogPostsComponent implements OnInit {

    displayedColumns: string[] = ['date', 'title'];

    @ViewChild('userDrawer') private sidenav: MatSidenav;

    @Input()
    posts: IPost[];

    compact$!: Observable<boolean>;

    _selectedPost: IPost = undefined;

    constructor(private media: MediaObserver) {}

    ngOnInit() {
        this.compact$ = this.media.asObservable().pipe(
            map(mediaMatch => {
                return !mediaMatch.find(change => change.mqAlias === 'gt-xs');
            }),
        );
    }

    objectValues(obj) {
        return Object.values(obj);
    }

    clickedBack() {
        this.sidenav.close();
    }

    clickedPost(post: any) {
        this._selectedPost = post;
    }
}
