import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsComponent } from './views.component';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';

const routes: Routes = [
  {
    path: '',
    component: ViewsComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'library',
        component: LibraryComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
