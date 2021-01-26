import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core/core.component';

const routes: Routes = [
//   {
//     path: 'intro',
//     component: IntroComponent,
//     data: {
//       breadcrumb: 'Intro',
//     },
//   },
//   {
//     path: 'wrapper',
//     component: WrapperComponent,
//     data: {
//       breadcrumb: 'Wrapper',
//     },
//   },
//   {
//     path: 'header',
//     component: HeaderComponent,
//     data: {
//       breadcrumb: 'Header',
//     },
//   },
//   {
//     path: 'sidenav',
//     component: SidenavComponent,
//     data: {
//       breadcrumb: 'Sidenav',
//     },
//   },
//   {
//     path: 'settings',
//     component: SettingsComponent,
//     data: {
//       breadcrumb: 'Settings',
//     },
//   },
    {
        path: 'core',
        component: CoreComponent,
        data: {
            breadcrumb: 'Rhombus Shell Core',
        },
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RhombusShellViewsRouting { }
