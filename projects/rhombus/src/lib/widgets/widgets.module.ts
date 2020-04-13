import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RhombusWidgetListComponent } from './list/list.component';
import { RhombusWidgetGridComponent } from './grid/grid.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,

    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
  ],
  declarations: [
    RhombusWidgetListComponent,
    RhombusWidgetGridComponent,
  ],
  exports: [
    RhombusWidgetListComponent,
    RhombusWidgetGridComponent,
  ],
})
export class RhombusWidgetsModule { }
