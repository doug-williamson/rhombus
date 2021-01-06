import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RhBlogModule } from '@dougwilliamson/rhombus';
import { RhAppBlogRoutingModule } from './blog.routing';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,

        MatToolbarModule,
        MatCardModule,

        RhBlogModule,

        RhAppBlogRoutingModule,
    ],
    declarations: [PostComponent, PostsComponent],

})
export class RhAppBlogModule { }
