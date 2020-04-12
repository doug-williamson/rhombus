import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RhombusShellSettingsComponent } from './settings.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
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
