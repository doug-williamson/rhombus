import { NgModule } from '@angular/core';
import { RhombusShellThemeRootComponent } from './theme/theme-root.component';
import { RhombusShellThemeComponent } from './theme/theme.component';

@NgModule({
  declarations: [
    RhombusShellThemeComponent,
    RhombusShellThemeRootComponent,
  ],
  exports: [
    RhombusShellThemeComponent,
    RhombusShellThemeRootComponent,
  ],
})
export class RhombusShellConfigurationModule { }