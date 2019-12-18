import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatToolbarModule } from '@angular/material';
import { RhombusShellModule } from 'projects/rhombus-shell';
import { RhombusAppHomeComponent } from './home/home.component';
import { RhombusShellComponent } from './rhombus-shell/rhombus-shell.component';
import { RhombusAppViewsComponent } from './views.component';
import { ViewsRoutingModule } from './views.routing';

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
      },
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
