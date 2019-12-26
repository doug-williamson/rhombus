import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RhombusShellSettingsComponent } from './settings.component';
import { MatButtonModule, MatCardModule, MatListModule, MatIconModule, MatToolbarModule, MatSlideToggleModule, MatSelectModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { RhombusShellThemeSettingComponent } from './theme-setting/theme-setting.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,

    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatSelectModule,
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
    RhombusShellThemeSettingComponent,

  ],
})
export class RhombusShellSettingsModule { }
