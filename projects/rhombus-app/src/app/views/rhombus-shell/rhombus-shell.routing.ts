import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../rhombus-shell/header/header.component';
import { SettingsComponent } from '../rhombus-shell/settings/settings.component';
import { SidenavComponent } from '../rhombus-shell/sidenav/sidenav.component';
import { WrapperComponent } from '../rhombus-shell/wrapper/wrapper.component';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full',
  },
  {
    path: 'intro',
    component: IntroComponent,
  },
  {
    path: 'wrapper',
    component: WrapperComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'sidenav',
    component: SidenavComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RhombusShellViewsRouting { }
