import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { RhombusShellRootConfigurationComponent } from '../_models/root-configuration';
import { RhombusShellThemeService } from '../../core/services/theme.service';
import { RhombusShellThemeComponent } from '../theme/theme.component';

@Component({
  selector: 'rhombus-shell-themes',
  template: '',
  providers: [
    {
      provide: RhombusShellRootConfigurationComponent, 
      useExisting: RhombusShellThemeRootComponent
    }
  ]
})
export class RhombusShellThemeRootComponent implements RhombusShellRootConfigurationComponent {

  @ContentChildren(RhombusShellThemeComponent)
  themeConfigs?: QueryList<RhombusShellThemeComponent>;

  constructor(private themeService: RhombusShellThemeService) { }

  refresh() {
    if (this.themeConfigs) {
      // this.updateAvailableThemes();
    }
  }

  private updateAvailableThemes(configs: QueryList<RhombusShellThemeComponent>) {

  }

}
