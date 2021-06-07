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
import { RhAuthModule } from '@dougwilliamson/rhombus';
import { RhShellModule } from '../../../rhombus-shell/src/lib/shell.module';
import { environment } from '../environments/environment';
import { RhAppComponent } from './app.component';
import { RhombusAppRoutingModule } from './app.routing';
import { RhombusModule } from './views/rhombus/rhombus.module';
import { ViewsComponent } from './views/views.component';

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

    RhombusModule,

    RhAuthModule,
    RhombusAppRoutingModule,

    RhShellModule.forRoot({
        applicationInfo: {
            logoUrl: '/assets/rhombus_logo_white.png',
            firebaseConfig: undefined,
        },
    }),
  ],
  declarations: [
    RhAppComponent,
    ViewsComponent,
  ],
  providers: [
    AngularFirestore,
  ],
  bootstrap: [RhAppComponent],
})
export class RhAppModule { }
