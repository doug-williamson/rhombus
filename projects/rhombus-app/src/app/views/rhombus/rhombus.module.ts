import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RhBacklogModule, RhLatestNewsModule } from '@dougwilliamson/rhombus';
import { BacklogComponent } from './backlog/backlog.component';
import { IntroComponent } from './intro/intro.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { RhombusViewsRouting } from './rhombus.routing';
@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,

    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,

    RhBacklogModule,
    RhLatestNewsModule,

    RhombusViewsRouting,
  ],
  declarations: [
    IntroComponent,
    BacklogComponent,
    LatestNewsComponent,
  ],

})
export class RhombusModule { }
