import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RhombusShellModule } from '@dougwilliamson/rhombus-shell';
import { RhombusComponentsModule } from 'projects/rhombus/src/public_api';
import { environment } from '../environments/environment';
import { RhombusAppComponent } from './app.component';
import { RhombusAppRoutingModule } from './app.routing';
import { GettingStartedComponent } from './views/getting-started/getting-started.component';
import { RhombusAppHomeComponent } from './views/home/home.component';
import { RhombusModule } from './views/rhombus/rhombus.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,

    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,

    RhombusShellModule.forRoot({
      applicationInfo: {
        name: 'Rhombus Software',
        version: '1.0.0-beta.10',
        logoUrl: '/assets/rhombus-icon.png',
        logoLetters: undefined,
        twitterUrl: 'https://twitter.com/ngRhombus',
        changelogUrl: 'https://github.com/doug-williamson/rhombus/blob/master/CHANGELOG.md',
        donateUrl: 'https://www.paypal.me/dmwilliamson08',
        contactUsLink: 'contact@rhombus.space',
        firebaseConfig: undefined,
      },
    }),

    RhombusModule,
    RhombusComponentsModule,
    RhombusAppRoutingModule,
  ],
  declarations: [
    RhombusAppComponent,
    RhombusAppHomeComponent,
    GettingStartedComponent,
  ],
  providers: [
    AngularFirestore,
  ],
  bootstrap: [RhombusAppComponent],
})
export class RhombusAppModule { }
