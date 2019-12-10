import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatToolbarModule, MatListModule, MatIconModule, MatSidenavModule, MatMenuModule, MatDialogModule, MatCardModule, MatSlideToggleModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { RhombusShellWrapperComponent } from './components/shell-wrapper/shell-wrapper.component';
import { RhombusShellHeaderComponent } from './components/shell-header/shell-header.component';
import { RhombusShellNavComponent } from './components/shell-nav/shell-nav.component';
import { RhombusShellAboutComponent } from './components/shell-about/shell-about.component';
import { RhombusShellApplicationInfoService } from './services/application-info.service';
import { RhombusShellThemeService } from './services/theme.service';
import { RhombusShellConfigurationModule } from '../configuration/configuration.module';

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
  ],
  entryComponents: [
    RhombusShellAboutComponent,
  ],
  exports: [
    RhombusShellWrapperComponent,
  ],
  providers: [
    RhombusShellApplicationInfoService,
    RhombusShellThemeService
  ]
})
export class RhombusShellCoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: RhombusShellCoreRootModule,
        }
    }
}

@NgModule({
    imports: [

    ],
    exports: [
        RhombusShellCoreModule,
    ],
    providers: [

    ]
})
export class RhombusShellCoreRootModule {}