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
import { RhShellAuthComponent } from './components/auth/auth.component';
import { RhShellHeaderComponent } from './components/header/header.component';
import { RhShellNavComponent } from './components/nav/nav.component';
import { RhombusShellSelectedListItemDirective } from './components/nav/nav.directive';
import { RhShellWrapperComponent } from './components/wrapper/wrapper.component';
import { RhombusShellApplicationInfoService } from './services/application-info.service';
import { RhombusShellThemeService } from './services/theme.service';
import { RhShellAboutComponent } from './views/about/about.component';
import { RhShellContactComponent } from './views/contact/contact.component';
import { RhShellDonateComponent } from './views/donate/donate.component';
import { RhombusShellSettingsModule } from './views/settings/settings.module';

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
    RhShellAuthComponent,
    RhShellWrapperComponent,
    RhShellHeaderComponent,
    RhShellNavComponent,
    RhShellAboutComponent,
    RhShellContactComponent,
    RhShellDonateComponent,

    RhombusShellSelectedListItemDirective,
  ],
  exports: [
    RhShellWrapperComponent,
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
