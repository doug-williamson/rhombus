import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BacklogComponent } from './backlog/backlog.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';

const routes: Routes = [
    {
        path: 'backlog',
        component: BacklogComponent,
        data: {
          title: 'Backlog',
        },
    },
    {
        path: 'blog',
        loadChildren: () => import('@dougwilliamson/rhombus').then(m => m.RhBlogModule),
        data: {
            title: 'Blog',
        },
    },
    {
        path: 'latest-news',
        component: LatestNewsComponent,
        data: {
          title: 'Latest News',
        },
    },
    {
        path: 'dynasties',
        loadChildren: () => import('./dynasties/dynasties.module').then(m => m.RhAppDynastiesModule),
        data: {
            title: '',
        },
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RhombusViewsRouting { }
