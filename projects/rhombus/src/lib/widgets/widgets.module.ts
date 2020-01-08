import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatListModule, MatToolbarModule } from '@angular/material';
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
