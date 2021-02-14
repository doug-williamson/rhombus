import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RhBacklogAddEditComponent } from './backlog/add-edit/add-edit.component';
import { BacklogComponent } from './backlog/backlog.component';
import { RhBacklogDeleteComponent } from './backlog/delete/delete.component';
import { RhDynastiesComponent } from './dynasties/dynasties.component';
import { RhDynastyComponent } from './dynasties/dynasty/dynasty.component';
import { RhDynastyTeamComponent } from './dynasties/team/team.component';
import { RhDynastyWeeksComponent } from './dynasties/weeks/weeks.component';
import { RhDynastyYearComponent } from './dynasties/year/year.component';
import { RhDynastyYearsComponent } from './dynasties/years/years.component';
import { RhLatestNewsAddEditComponent } from './latest-news/add-edit/add-edit.component';
import { RhLatestNewsDeleteComponent } from './latest-news/delete/delete.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
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
    RhDynastyYearComponent,
    RhBacklogAddEditComponent,
    RhBacklogDeleteComponent,
    RhLatestNewsAddEditComponent,
    RhLatestNewsDeleteComponent,
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
