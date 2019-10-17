import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LibraryComponent } from './views/library/library.component';
import { SettingsComponent } from './views/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    // loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule),
    component: HomeComponent,
  },
  {
    path: 'library',
    // loadChildren: () => import('./views/library/library.module').then(m => m.LibraryModule),
    component: LibraryComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
