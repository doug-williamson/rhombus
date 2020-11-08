import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { IntroComponent } from './intro/intro.component';
import { RhombusViewsRouting } from './rhombus.routing';

@NgModule({
  declarations: [
    IntroComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,

    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,

    RhombusViewsRouting,
  ],
})
export class RhombusModule { }
