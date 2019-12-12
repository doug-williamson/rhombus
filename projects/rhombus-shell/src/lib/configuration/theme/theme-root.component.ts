import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { RhombusShellThemeService } from '../../core/services/theme.service';
import { RhombusShellRootConfigurationComponent } from '../_models/root-configuration';
import { RhombusShellThemeComponent } from '../theme/theme.component';

@Component({
  selector: 'rhombus-shell-themes',
  template: '',
  providers: [
    {
      provide: RhombusShellRootConfigurationComponent,
      useExisting: RhombusShellThemeRootComponent,
    },
  ],
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
