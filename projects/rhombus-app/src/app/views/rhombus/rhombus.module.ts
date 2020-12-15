import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RhombusComponentsModule } from '@dougwilliamson/rhombus';
import { BacklogComponent } from './backlog/backlog.component';
import { RhAppDynastiesComponent } from './dynasties/dynasties.component';
import { IntroComponent } from './intro/intro.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { RhombusViewsRouting } from './rhombus.routing';

@NgModule({
  declarations: [
    IntroComponent,
    BacklogComponent,
    LatestNewsComponent,
    RhAppDynastiesComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,

    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,

    RhombusComponentsModule,

    RhombusViewsRouting,
  ],
})
export class RhombusModule { }
