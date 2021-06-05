import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { RhombusShellConfigurationModule } from '../configuration/configuration.module';
import { RhombusShellSettingsModule } from '../configuration/public_api';
import { RhombusShellAuthComponent } from './components/auth/auth.component';
import { RhombusShellHeaderComponent } from './components/shell-header/shell-header.component';
import { RhombusShellNavComponent } from './components/shell-nav/shell-nav.component';
import { RhombusShellSelectedListItemDirective } from './components/shell-nav/shell-nav.directive';
import { RhombusShellWrapperComponent } from './components/shell-wrapper/shell-wrapper.component';
import { RhombusShellApplicationInfoService } from './services/application-info.service';
import { RhombusShellThemeService } from './services/theme.service';
import { RhShellAboutComponent } from './views/about/about.component';
import { RhShellContactComponent } from './views/contact/contact.component';
import { RhShellDonateComponent } from './views/donate/donate.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,

    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule,

    ClipboardModule,
  ],
  declarations: [
    RhombusShellAuthComponent,
    RhombusShellWrapperComponent,
    RhombusShellHeaderComponent,
    RhombusShellNavComponent,
    RhShellAboutComponent,
    RhShellContactComponent,
    RhShellDonateComponent,

    RhombusShellSelectedListItemDirective,
  ],
  exports: [
    RhombusShellWrapperComponent,
    RhombusShellConfigurationModule,
    RhombusShellSelectedListItemDirective,
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
