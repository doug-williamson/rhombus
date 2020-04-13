import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RhombusShellModule } from 'projects/rhombus-shell';
import { RhombusWidgetsModule } from 'projects/rhombus/src/public-api';
import { environment } from '../environments/environment';
import { RhombusAppComponent } from './app.component';
import { RhombusAppRoutingModule } from './app.routing';
import { RhombusAppHomeComponent } from './views/home/home.component';
import { RhombusShellComponent } from './views/rhombus-shell/rhombus-shell.component';
import { AngularFirestore } from '@angular/fire/firestore';

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

    RhombusWidgetsModule,

    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),

    RhombusShellModule.forRoot({
      applicationInfo: {
        name: 'Rhombus Software',
        version: '1.0.0-beta.4',
        logoUrl: '/assets/rhombus-icon.png',
        logoLetters: undefined,
        twitterUrl: 'https://twitter.com/ngRhombus',
        changelogUrl: 'https://github.com/doug-williamson/rhombus/blob/master/CHANGELOG.md',
        donateUrl: 'https://www.paypal.me/dmwilliamson08',
        contactUsLink: 'doug@dougwilliamson.space',
        firebaseConfig: undefined,
      },
    }),
    RhombusAppRoutingModule,
  ],
  declarations: [
    RhombusAppComponent,
    RhombusAppHomeComponent,
    RhombusShellComponent,
  ],
  providers: [
    AngularFirestore,
  ],
  bootstrap: [RhombusAppComponent],
})
export class RhombusAppModule { }
