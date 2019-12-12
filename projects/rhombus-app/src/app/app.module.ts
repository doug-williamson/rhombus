import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RhombusAppComponent } from './app.component';
import { RhombusAppRoutingModule } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,

    RouterModule,
    RhombusAppRoutingModule,
  ],
  declarations: [
    RhombusAppComponent,
  ],
  bootstrap: [RhombusAppComponent],
})
export class RhombusAppModule { }
