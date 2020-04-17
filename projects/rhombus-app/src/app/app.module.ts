import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RhombusWidgetsModule } from '@dougwilliamson/rhombus';
import { RhombusShellModule } from '@dougwilliamson/rhombus-shell';
import { environment } from '../environments/environment';
import { RhombusAppComponent } from './app.component';
import { RhombusAppRoutingModule } from './app.routing';
import { GettingStartedComponent } from './views/getting-started/getting-started.component';
import { RhombusAppHomeComponent } from './views/home/home.component';
import { HeaderComponent } from './views/rhombus-shell/header/header.component';
import { SettingsComponent } from './views/rhombus-shell/settings/settings.component';
import { SidenavComponent } from './views/rhombus-shell/sidenav/sidenav.component';
import { WrapperComponent } from './views/rhombus-shell/wrapper/wrapper.component';
import { IntroComponent } from './views/rhombus/intro/intro.component';

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
    MatToolbarModule,

    RhombusWidgetsModule,

    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),

    RhombusShellModule.forRoot({
      applicationInfo: {
        name: 'Rhombus Software',
        version: '1.0.0-beta.0',
        logoUrl: '/assets/rhombus-icon.png',
        logoLetters: undefined,
        twitterUrl: 'https://twitter.com/ngRhombus',
        changelogUrl: 'https://github.com/doug-williamson/rhombus/blob/master/CHANGELOG.md',
        donateUrl: 'https://www.paypal.me/dmwilliamson08',
        contactUsLink: 'contact@rhombus.space',
        firebaseConfig: undefined,
      },
    }),
    RhombusAppRoutingModule,
  ],
  declarations: [
    RhombusAppComponent,
    RhombusAppHomeComponent,
    GettingStartedComponent,
    IntroComponent,
    WrapperComponent,
    HeaderComponent,
    SidenavComponent,
    SettingsComponent,
  ],
  providers: [
    AngularFirestore,
  ],
  bootstrap: [RhombusAppComponent],
})
export class RhombusAppModule { }
