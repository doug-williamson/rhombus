import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RhombusAppViewsComponent } from './views.component';
import { RhombusShellModule } from 'projects/rhombus-shell/src/public-api';
import { ViewsRoutingModule } from './views.routing';
import { RhombusAppHomeComponent } from './home/home.component';
import { MatButtonModule, MatCardModule, MatListModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { RhombusShellComponent } from './rhombus-shell/rhombus-shell.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,

    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,

    RhombusShellModule.forRoot({
      applicationInfo: {
        name: 'Rhombus Software',
        version: '1.0.0-beta.1',
        logoUrl: '/assets/rhombus-icon.png',
        logoLetters: undefined,
        twitterUrl: 'https://twitter.com/ngRhombus',
      }
    }),
    ViewsRoutingModule,
  ],
  declarations: [
    RhombusAppViewsComponent,
    RhombusAppHomeComponent,
    RhombusShellComponent,
  ],
})
export class RhombusAppViewsModule { }
