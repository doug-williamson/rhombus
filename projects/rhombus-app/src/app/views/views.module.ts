import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { RhombusShellModule } from 'projects/rhombus-shell/src/public-api';
import { ViewsRoutingModule } from './views.routing';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';

@NgModule({
  imports: [
    CommonModule,

    RhombusShellModule,
    ViewsRoutingModule,
  ],
  declarations: [
    ViewsComponent,
    HomeComponent,
    LibraryComponent
  ],
})
export class ViewsModule { }
