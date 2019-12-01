import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RhombusAppViewsComponent } from './views.component';
import { RhombusShellModule } from 'projects/rhombus-shell/src/public-api';
import { ViewsRoutingModule } from './views.routing';
import { RhombusAppHomeComponent } from './home/home.component';
import { RhombusAppLibraryComponent } from './library/library.component';

@NgModule({
  imports: [
    CommonModule,

    RhombusShellModule,
    ViewsRoutingModule,
  ],
  declarations: [
    RhombusAppViewsComponent,
    RhombusAppHomeComponent,
    RhombusAppLibraryComponent
  ],
})
export class RhombusAppViewsModule { }
