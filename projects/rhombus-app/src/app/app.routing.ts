import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GettingStartedComponent } from './views/getting-started/getting-started.component';
import { RhombusAppHomeComponent } from './views/home/home.component';
import { HeaderComponent } from './views/rhombus-shell/header/header.component';
import { SettingsComponent } from './views/rhombus-shell/settings/settings.component';
import { SidenavComponent } from './views/rhombus-shell/sidenav/sidenav.component';
import { WrapperComponent } from './views/rhombus-shell/wrapper/wrapper.component';
import { IntroComponent } from './views/rhombus/intro/intro.component';

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
    path: 'getting-started',
    component: GettingStartedComponent,
  },
  {
    path: 'rhombus/intro',
    component: IntroComponent,
  },
  {
    path: 'rhombus-shell/intro',
    component: IntroComponent,
  },
  {
    path: 'rhombus-shell/wrapper',
    component: WrapperComponent,
  },
  {
    path: 'rhombus-shell/header',
    component: HeaderComponent,
  },
  {
    path: 'rhombus-shell/settings',
    component: SettingsComponent,
  },
  {
    path: 'rhombus-shell/sidenav',
    component: SidenavComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RhombusAppRoutingModule { }
