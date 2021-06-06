import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { RhDynastiesAddEditComponent } from './components/dynasties/add-edit/add-edit.component';
import { RhDynastiesComponent } from './components/dynasties/dynasties.component';
import { RhDynastyMarkModule } from './components/dynasty-mark/dynasty-mark.module';
import { RhDynastyTeamComponent } from './components/team/team.component';
import { RhDynastyMarkYearWeekAddEditComponent } from './components/weeks/add-edit/add-edit.component';
import { RhDynastyWeeksComponent } from './components/weeks/weeks.component';
import { RhDynastyMarkYearAddComponent } from './components/years/add/add.component';
import { RhDynastyYearsComponent } from './components/years/years.component';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        FormsModule,
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
        MatSlideToggleModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatExpansionModule,

        RhDynastyMarkModule,

        RouterModule.forChild([
            {
                path: '',
                component: RhDynastiesComponent,
                data: {
                  title: 'Dynasties',
                },
            },
            {
                path: ':id',
                component: RhDynastiesComponent,
                data: {
                    title: 'Dynasty',
                },
            },
            {
                path: ':id/mark/:markId',
                component: RhDynastyYearsComponent,
                data: {
                    title: 'Mark',
                },
            },
            {
                path: ':id/mark/:markId/years/:yearId',
                component: RhDynastyWeeksComponent,
                data: {
                    title: 'Year',
                },
            },
        ]),
    ],
    declarations: [
        RhDynastiesComponent,
        RhDynastyYearsComponent,
        RhDynastyTeamComponent,
        RhDynastyWeeksComponent,
        RhDynastiesAddEditComponent,
        RhDynastyMarkYearAddComponent,
        RhDynastyMarkYearWeekAddEditComponent,
    ],
    exports: [
        RouterModule,
    ],
})
export class RhDynastiesModule { }
