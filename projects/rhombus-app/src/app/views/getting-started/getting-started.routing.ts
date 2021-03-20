import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RhombusShellComponent } from './rhombus-shell/rhombus-shell.component';
import { RhombusComponent } from './rhombus/rhombus.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
        data: {
            breadcrumb: 'Getting Started - Home',
        },
    },
    {
        path: 'rhombus',
        component: RhombusComponent,
        data: {
            breadcrumb: 'Getting Started - Rhombus',
        },
    },
    {
        path: 'rhombus-shell',
        component: RhombusShellComponent,
        data: {
            breadcrumb: 'Getting Started - Rhombus Shell',
        },
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RhAppGettingStartedRoutingModule { }
