import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule, MatButtonModule, MatMenuModule, MatDialogModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeModule } from './views/home/home.module';
import { LibraryModule } from './views/library/library.module';
import { SettingsComponent } from './views/settings/settings.component';
import { SettingsModule } from './views/settings/settings.module';
import { AboutComponent } from './views/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatDialogModule,

    HomeModule,
    LibraryModule,
    SettingsModule,

    AppRoutingModule
  ],
  entryComponents: [AboutComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
