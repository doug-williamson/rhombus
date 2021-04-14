import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BacklogComponent } from './backlog/backlog.component';
import { RhAppBlogComponent } from './blog/blog.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';

const routes: Routes = [
  {
    path: 'backlog',
    component: BacklogComponent,
    data: {
      breadcrumb: 'Backlog',
    },
  },
  {
    path: 'blog',
    component: RhAppBlogComponent,
    data: {
      breadcrumb: 'Blog',
    },
  },
  {
    path: 'latest-news',
    component: LatestNewsComponent,
    data: {
      breadcrumb: 'Latest News',
    },
  },
  {
    path: 'dynasties',
    loadChildren: () => import('./dynasties/dynasties.module').then(m => m.RhAppDynastiesModule),
    data: {
      breadcrumb: 'Dynasties',
    },
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RhombusViewsRouting { }
