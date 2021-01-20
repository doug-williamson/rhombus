import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components/components.component';

const routes: Routes = [
    {
        path: 'components',
        component: ComponentsComponent,
        data: {
        breadcrumb: 'Rhombus - Components',
        },
    },
    // {
    //     path: 'backlog',
    //     component: BacklogComponent,
    //     data: {
    //     breadcrumb: 'Backlog',
    //     },
    // },
    // {
    //     path: 'latest-news',
    //     component: LatestNewsComponent,
    //     data: {
    //     breadcrumb: 'Latest News',
    //     },
    // },
    // {
    //     path: 'dynasties',
    //     component: RhAppDynastiesComponent,
    //     data: {
    //         breadcrumb: 'Dynasties',
    //     },
    // },
    // {
    //     path: 'blog',
    //     loadChildren: () => import('./blog/blog.module').then(m => m.RhAppBlogModule),
    //     data: {
    //         breadcrumb: 'Blog',
    //     },
    // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RhombusViewsRouting { }
