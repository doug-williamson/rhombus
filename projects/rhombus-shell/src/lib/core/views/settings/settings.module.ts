import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RhombusShellSettingsComponent } from './settings.component';
import { MatButtonModule, MatCardModule, MatListModule, MatIconModule, MatToolbarModule, MatSlideToggleModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,

    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatSlideToggleModule,
    MatToolbarModule,

    RouterModule.forChild([
      {
        path: 'settings',
        component: RhombusShellSettingsComponent,
      },
    ]),
  ],
  declarations: [
    RhombusShellSettingsComponent,
  ],
})
export class RhombusShellSettingsModule { }
