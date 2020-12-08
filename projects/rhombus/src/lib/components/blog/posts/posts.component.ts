import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';
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
    
    mobile$!: Observable<boolean>;

    _selectedPost: IPost = {
        id: 1,
        timestamp: '1585972800',
        title: "Doug's Opening Thoughts and stuff",
        paragraphs: [],
    };

    constructor(private media: MediaObserver) {}

    ngOnInit() {
        this.mobile$ = this.media.asObservable().pipe(
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
