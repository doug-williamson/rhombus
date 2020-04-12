import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { RhombusShellConfigurationModule } from '../configuration/configuration.module';
import { RhombusShellSettingsModule } from '../configuration/public_api';
import { RhombusShellAboutComponent } from './components/shell-about/shell-about.component';
import { RhombusShellDonateComponent } from './components/shell-donate/shell-donate.component';
import { RhombusShellHeaderComponent } from './components/shell-header/shell-header.component';
import { RhombusShellNavComponent } from './components/shell-nav/shell-nav.component';
import { RhombusShellWrapperComponent } from './components/shell-wrapper/shell-wrapper.component';
import { RhombusShellApplicationInfoService } from './services/application-info.service';
import { RhombusShellThemeService } from './services/theme.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,

    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatDialogModule,
  ],
  declarations: [
    RhombusShellWrapperComponent,
    RhombusShellHeaderComponent,
    RhombusShellNavComponent,
    RhombusShellAboutComponent,
    RhombusShellDonateComponent,
  ],
  entryComponents: [
    RhombusShellAboutComponent,
    RhombusShellDonateComponent,
  ],
  exports: [
    RhombusShellWrapperComponent,
    RhombusShellConfigurationModule,
  ],
  providers: [
    RhombusShellApplicationInfoService,
    RhombusShellThemeService,
  ],
})
export class RhombusShellCoreModule {
    static forRoot(): ModuleWithProviders<RhombusShellCoreRootModule> {
        return {
            ngModule: RhombusShellCoreRootModule,
        };
    }
}

@NgModule({
    imports: [
      RhombusShellSettingsModule,
    ],
    exports: [
      RhombusShellCoreModule,
    ],
})
export class RhombusShellCoreRootModule {}
