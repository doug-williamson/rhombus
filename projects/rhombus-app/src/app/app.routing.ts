import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RhombusAppComponent } from './app.component';
import { RhombusAppHomeComponent } from './views/home/home.component';
import { RhombusShellComponent } from './views/rhombus-shell/rhombus-shell.component';

const routes: Routes = [
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
    component: RhombusShellComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RhombusAppRoutingModule { }
