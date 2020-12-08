import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
    {
        path: '',
        component: PostsComponent,
        data: {
            breadcrumb: 'Posts',
        },
    },
    {
        path: ':id',
        component: PostComponent,
        data: {
            breadcrumb: 'Post',
        },
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RhAppBlogRoutingModule { }
