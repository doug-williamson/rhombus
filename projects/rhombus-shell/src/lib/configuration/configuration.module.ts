import { NgModule } from '@angular/core';
import { RhShellThemeRootComponent } from './theme/theme-root.component';
import { RhShellThemeComponent } from './theme/theme.component';

@NgModule({
  declarations: [
    RhShellThemeComponent,
    RhShellThemeRootComponent,
  ],
  exports: [
    RhShellThemeComponent,
    RhShellThemeRootComponent,
  ],
})
export class RhShellConfigurationModule { }
