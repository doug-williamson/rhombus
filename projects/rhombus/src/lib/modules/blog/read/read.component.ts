import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { RhAuthService } from '../../auth/auth.service';
import { RhBlogService } from '../blog.service';
import { IPost } from '../post';

@Component({
  selector: 'rh-blog-post',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class RhBlogPostComponent implements OnInit {

    isOwner = false;
    displayedColumns: string[] = ['timestamp', 'title', 'admin'];
    post: IPost;
    compact$: Observable<boolean>;

    constructor(
      private router: Router,
      private route: ActivatedRoute,
      private media: MediaObserver,
      private authService: RhAuthService,
      private blogService: RhBlogService) {

    }

    ngOnInit() {
        this.compact$ = this.media.asObservable().pipe(
            map(mediaMatch => {
                return !mediaMatch.find(change => change.mqAlias === 'gt-xs');
            }),
        );

        this.authService.user$.subscribe(res => {
            this.isOwner = this.authService.isOwner(res);
        });

        // Or as an alternative, with slightly different execution...
        this.route.paramMap.subscribe((params: ParamMap) =>  {
            this.blogService.getPost$(params.get('id')).subscribe(res => {
                this.post = res;
            });
        });
    }

    goBack() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }

}
