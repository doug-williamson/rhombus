import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core/core.component';

const routes: Routes = [
//   {
//     path: 'intro',
//     component: IntroComponent,
//     data: {
//       title:'Intro',
//     },
//   },
//   {
//     path: 'wrapper',
//     component: WrapperComponent,
//     data: {
//       title:'Wrapper',
//     },
//   },
//   {
//     path: 'header',
//     component: HeaderComponent,
//     data: {
//       title:'Header',
//     },
//   },
//   {
//     path: 'sidenav',
//     component: SidenavComponent,
//     data: {
//       title:'Sidenav',
//     },
//   },
//   {
//     path: 'settings',
//     component: SettingsComponent,
//     data: {
//       title:'Settings',
//     },
//   },
  {
    path: '',
    redirectTo: 'core',
    pathMatch: 'full',
  },
  {
    path: 'core',
    component: CoreComponent,
    data: {
      title: 'Rhombus Shell Core',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RhombusShellViewsRouting { }
