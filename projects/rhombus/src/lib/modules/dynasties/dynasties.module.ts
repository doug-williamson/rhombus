import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
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
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { RhDynastiesAddEditComponent } from './components/dynasties/add-edit/add-edit.component';
import { RhDynastiesDeleteComponent } from './components/dynasties/delete/delete.component';
import { RhDynastiesComponent } from './components/dynasties/dynasties.component';
import { RhDynastyComponent } from './components/dynasty/dynasty.component';
import { RhDynastyTeamComponent } from './components/team/team.component';
import { RhDynastyWeeksComponent } from './components/weeks/weeks.component';
import { RhDynastyYearComponent } from './components/year/year.component';
import { RhDynastyYearsComponent } from './components/years/years.component';
import { DynastyMarkComponent } from './components/dynasty-mark/dynasty-mark.component';
import { AddEditComponent } from './components/years/add-edit/add-edit.component';
import { DeleteComponent } from './components/years/delete/delete.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatExpansionModule,

    RouterModule.forChild([
      {
        path: '',
        children: [
          {
            path: '',
            component: RhDynastiesComponent,
            data: {
              animation: 'Dynasties',
            },
          },
          {
            path: ':id',
            component: RhDynastiesComponent,
            data: {
              animation: 'Dynasties',
            },
          },
          {
            path: ':id/mark/:markId',
            component: RhDynastyYearsComponent,
            data: {
              animation: 'Dynasty',
            },
          },
        ],
      },
    ]),
  ],
  declarations: [
    RhDynastiesComponent,
    RhDynastyComponent,
    RhDynastyYearsComponent,
    RhDynastyYearComponent,
    RhDynastyTeamComponent,
    RhDynastyWeeksComponent,
    RhDynastiesAddEditComponent,
    RhDynastiesDeleteComponent,
    DynastyMarkComponent,
    AddEditComponent,
    DeleteComponent,
  ],
  exports: [
    RouterModule,
    RhDynastiesComponent,
  ],
})
export class RhDynastiesModule { }
