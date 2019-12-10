import { NgModule } from '@angular/core';
import { RhombusShellThemeComponent } from './theme/theme.component';
import { RhombusShellThemeRootComponent } from './theme-root/theme-root.component';

@NgModule({
  declarations: [
    RhombusShellThemeComponent, 
    RhombusShellThemeRootComponent
  ],
  exports: [
    RhombusShellThemeComponent, 
    RhombusShellThemeRootComponent
  ]
})
export class RhombusShellConfigurationModule { }
