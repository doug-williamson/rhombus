import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BacklogComponent } from './backlog/backlog.component';
import { IntroComponent } from './intro/intro.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';

const routes: Routes = [
  {
    path: 'intro',
    component: IntroComponent,
    data: {
      breadcrumb: 'Intro',
    },
  },
  {
    path: 'backlog',
    component: BacklogComponent,
    data: {
      breadcrumb: 'Backlog',
    },
  },
  {
    path: 'latest-news',
    component: LatestNewsComponent,
    data: {
      breadcrumb: 'Latest News',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RhombusViewsRouting { }
