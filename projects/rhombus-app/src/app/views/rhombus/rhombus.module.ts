import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { IntroComponent } from './intro/intro.component';
import { RhombusViewsRouting } from './rhombus.routing';

@NgModule({
  declarations: [
    IntroComponent,
  ],
  imports: [
    CommonModule,

    MatButtonModule,
    MatCardModule,
    MatIconModule,

    RhombusViewsRouting,
  ],
})
export class RhombusModule { }
