import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { RhombusShellAboutComponent } from './components/shell-about/shell-about.component';
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
  ],
  entryComponents: [
    RhombusShellAboutComponent,
  ],
  exports: [
    RhombusShellWrapperComponent,
  ],
  providers: [
    RhombusShellApplicationInfoService,
    RhombusShellThemeService,
  ],
})
export class RhombusShellCoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: RhombusShellCoreRootModule,
        };
    }
}

@NgModule({
    imports: [

    ],
    exports: [
        RhombusShellCoreModule,
    ],
    providers: [

    ],
})
export class RhombusShellCoreRootModule {}
