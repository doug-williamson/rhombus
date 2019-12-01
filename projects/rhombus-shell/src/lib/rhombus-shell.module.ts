import { NgModule } from '@angular/core';
import { RhombusShellWrapperComponent } from './components/shell-wrapper/shell-wrapper.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatToolbarModule, MatListModule, MatIconModule, MatSidenavModule, MatMenuModule, MatDialogModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { RhombusShellHeaderComponent } from './components/shell-header/shell-header.component';
import { RhombusShellNavComponent } from './components/shell-nav/shell-nav.component';
import { RhombusShellAboutComponent } from './components/shell-about/shell-about.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,

    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
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
    RhombusShellWrapperComponent
  ],
  providers: [
  ]
})
export class RhombusShellModule { }
