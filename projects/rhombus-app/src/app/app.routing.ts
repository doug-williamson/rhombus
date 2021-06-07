import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RhLoginComponent } from '@dougwilliamson/rhombus';
import { RhShellAboutComponent, RhShellContactComponent, RhShellDonateComponent } from '@dougwilliamson/rhombus-shell';
import { RhAuthGuardService } from './services/auth-guard.service';
import { ViewsComponent } from './views/views.component';

const routes: Routes = [
    {
        path: 'login',
        component: RhLoginComponent,
        data: {
            title: 'Login',
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
                    title: '',
                },
            },
            {
                path: 'rhombus',
                loadChildren: () => import('./views/rhombus/rhombus.module').then(m => m.RhombusModule),
                data: {
                    title: '',
                },
            },
            {
                path: 'rhombus-shell',
                loadChildren: () => import('./views/rhombus-shell/rhombus-shell.module').then(m => m.RhombusShellModule),
                data: {
                    title: '',
                },
            },
            // {
            //     path: 'settings',
            //     component: RhShellSettingsComponent,
            //     data: {
            //         title: 'Settings',
            //     },
            // },
            {
                path: 'about',
                component: RhShellAboutComponent,
                data: {
                    title: 'About',
                },
            },
            {
                path: 'contact',
                component: RhShellContactComponent,
                data: {
                    title: 'Contact',
                },
            },
            {
                path: 'donate',
                component: RhShellDonateComponent,
                data: {
                    title: 'Donate',
                },
            },
        ],
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RhombusAppRoutingModule { }
