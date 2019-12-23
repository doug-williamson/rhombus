import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RhombusShellModule } from 'projects/rhombus-shell';
import { RhombusAppComponent } from './app.component';
import { RhombusAppRoutingModule } from './app.routing';
import { RhombusAppHomeComponent } from './views/home/home.component';
import { RhombusShellComponent } from './views/rhombus-shell/rhombus-shell.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,

    RhombusShellModule.forRoot({
      applicationInfo: {
        name: 'Rhombus Software',
        version: '1.0.0-beta.2',
        logoUrl: '/assets/rhombus-icon.png',
        logoLetters: undefined,
        twitterUrl: 'https://twitter.com/ngRhombus',
        changelogUrl: 'https://github.com/doug-williamson/rhombus/blob/master/CHANGELOG.md',
      },
    }),
    RhombusAppRoutingModule,
  ],
  declarations: [
    RhombusAppComponent,
    RhombusAppHomeComponent,
    RhombusShellComponent,
  ],
  bootstrap: [RhombusAppComponent],
})
export class RhombusAppModule { }
