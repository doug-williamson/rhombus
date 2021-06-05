import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { startWith } from 'rxjs/operators';
import { RhShellTheme } from '../../core/models/theme';
import { RhShellThemeService } from '../../core/services/theme.service';
import { RhShellThemeComponent } from '../theme/theme.component';
import { RhShellRootConfigurationComponent } from '../_models/root-configuration';

@Component({
  selector: 'rh-shell-themes',
  template: '',
  providers: [
    {
      provide: RhShellRootConfigurationComponent,
      useExisting: RhShellThemeRootComponent,
    },
  ],
})
export class RhShellThemeRootComponent implements RhShellRootConfigurationComponent, AfterContentInit {

  @ContentChildren(RhShellThemeComponent)
  themeConfigs?: QueryList<RhShellThemeComponent>;

  constructor(private themeService: RhShellThemeService) { }

  ngAfterContentInit() {
    // if (this.themeConfigs) {
    //   this.themeConfigs.changes.pipe(
    //     startWith(this.themeConfigs),
    //   ).subscribe((shellThemes: QueryList<RhShellThemeComponent>) => {
    //     // this.updateAvailableThemes(shellThemes);
    //   });
    // }

    this.themeService.setInitialDarkMode();
  }

  refresh() {
    // this.themeService.setInitialDarkMode();
  }

  // private updateAvailableThemes(configs: QueryList<RhShellThemeComponent>) {
  //   const themes = configs
  //     .map(config => config.toModel())
  //     .filter((theme): theme is RhShellTheme => theme !== undefined);
  //   this.themeService.updateAvailableThemes(themes);
  // }

}
