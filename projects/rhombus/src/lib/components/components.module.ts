import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BacklogComponent } from './backlog/backlog.component';
import { RhDynastiesComponent } from './dynasties/dynasties.component';
import { RhDynastyComponent } from './dynasties/dynasty/dynasty.component';
import { RhDynastyTeamComponent } from './dynasties/team/team.component';
import { RhDynastyYearsComponent } from './dynasties/years/years.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { RhDynastyWeeksComponent } from './dynasties/weeks/weeks.component';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,

        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatTableModule,
        MatToolbarModule,
        MatExpansionModule,
    ],
    declarations: [
        BacklogComponent,
        LatestNewsComponent,
        RhDynastiesComponent,
        RhDynastyComponent,
        RhDynastyYearsComponent,
        RhDynastyTeamComponent,
        RhDynastyWeeksComponent,
    ],
    exports: [
        BacklogComponent,
        LatestNewsComponent,
        RhDynastiesComponent,
        RhDynastyComponent,
        RhDynastyYearsComponent,
        RhDynastyTeamComponent,
        RhDynastyWeeksComponent,
    ],
})
export class RhombusComponentsModule { }
