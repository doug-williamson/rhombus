import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../rhombus-shell/header/header.component';
import { SettingsComponent } from '../rhombus-shell/settings/settings.component';
import { SidenavComponent } from '../rhombus-shell/sidenav/sidenav.component';
import { WrapperComponent } from '../rhombus-shell/wrapper/wrapper.component';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  {
    path: 'intro',
    component: IntroComponent,
    data: {
      breadcrumb: 'Intro',
    },
  },
  {
    path: 'wrapper',
    component: WrapperComponent,
    data: {
      breadcrumb: 'Wrapper',
    },
  },
  {
    path: 'header',
    component: HeaderComponent,
    data: {
      breadcrumb: 'Header',
    },
  },
  {
    path: 'sidenav',
    component: SidenavComponent,
    data: {
      breadcrumb: 'Sidenav',
    },
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: {
      breadcrumb: 'Settings',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RhombusShellViewsRouting { }
