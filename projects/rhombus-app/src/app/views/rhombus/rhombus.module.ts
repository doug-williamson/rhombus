import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IntroComponent } from './intro/intro.component';
import { RhombusViewsRouting } from './rhombus.routing';

@NgModule({
  declarations: [
    IntroComponent,
  ],
  imports: [
    CommonModule,

    RhombusViewsRouting,
  ],
})
export class RhombusModule { }
