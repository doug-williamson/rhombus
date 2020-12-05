import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GettingStartedComponent } from './views/getting-started/getting-started.component';
import { RhombusAppHomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: RhombusAppHomeComponent,
    data: {
      breadcrumb: 'Home',
    },
  },
  {
    path: 'getting-started',
    component: GettingStartedComponent,
    data: {
      breadcrumb: 'Getting Started',
    },
  },
  {
    path: 'rhombus',
    loadChildren: () => import('./views/rhombus/rhombus.module').then(m => m.RhombusModule),
    data: {
      breadcrumb: 'Rhombus',
    },
  },
  {
    path: 'rhombus-shell',
    loadChildren: () => import('./views/rhombus-shell/rhombus-shell.module').then(m => m.RhombusShellModule),
    data: {
      breadcrumb: 'Rhombus Shell',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RhombusAppRoutingModule { }
