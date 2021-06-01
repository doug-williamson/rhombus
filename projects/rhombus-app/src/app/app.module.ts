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
import { RhombusComponentsModule } from '@dougwilliamson/rhombus';
import { RhombusShellModule } from '@dougwilliamson/rhombus-shell';
import { environment } from '../environments/environment';
import { RhombusAppComponent } from './app.component';
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
    RhombusComponentsModule,
    RhombusAppRoutingModule,

    RhombusShellModule.forRoot({
        applicationInfo: {
            logoUrl: '/assets/rhombus-icon.png',
            firebaseConfig: undefined,
        },
    }),
  ],
  declarations: [
    RhombusAppComponent,
    ViewsComponent,
  ],
  providers: [
    AngularFirestore,
  ],
  bootstrap: [RhombusAppComponent],
})
export class RhombusAppModule { }
