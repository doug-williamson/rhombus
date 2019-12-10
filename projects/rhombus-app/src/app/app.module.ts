import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RhombusAppRoutingModule } from './app.routing';
import { RhombusAppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    RouterModule,
    RhombusAppRoutingModule
  ],
  declarations: [
    RhombusAppComponent,
  ],
  bootstrap: [RhombusAppComponent]
})
export class RhombusAppModule { }
