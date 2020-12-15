import { Component, Input, OnInit } from '@angular/core';
import { IPost } from './post';

@Component({
  selector: 'rh-blog-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class RhBlogPostComponent implements OnInit {

    @Input()
    post: IPost;

    constructor() {}

    ngOnInit() {
    }
}
