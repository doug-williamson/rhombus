import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RhLoginComponent } from '../../../rhombus/src/lib/modules/auth/login/login.component';
import { RhAuthGuardService } from './services/auth-guard.service';
import { ViewsComponent } from './views/views.component';

const routes: Routes = [
    {
        path: 'login',
        component: RhLoginComponent,
        data: {
            breadcrumb: 'Login',
        },
    },
    {
        path: '',
        component: ViewsComponent,
        canActivate: [RhAuthGuardService],
        children: [
            {
                path: '',
                redirectTo: 'getting-started',
                pathMatch: 'full',
            },
            {
                path: 'getting-started',
                loadChildren: () => import('./views/getting-started/getting-started.module').then(m => m.GettingStartedModule),
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
        ],
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RhombusAppRoutingModule { }
