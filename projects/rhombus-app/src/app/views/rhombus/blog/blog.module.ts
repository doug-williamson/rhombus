import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RhBlogModule } from 'projects/rhombus/src/public_api';
import { RhAppBlogRoutingModule } from './blog.routing';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';



@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,

        RhBlogModule,

        RhAppBlogRoutingModule,
    ],
    declarations: [PostComponent, PostsComponent],

})
export class RhAppBlogModule { }
