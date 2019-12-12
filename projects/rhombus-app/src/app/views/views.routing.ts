import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RhombusAppViewsComponent } from './views.component';
import { RhombusAppHomeComponent } from './home/home.component';
import { RhombusShellComponent } from './rhombus-shell/rhombus-shell.component';

const routes: Routes = [
  {
    path: '',
    component: RhombusAppViewsComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: RhombusAppHomeComponent,
      },
      {
        path: 'rhombus-shell',
        component: RhombusShellComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
