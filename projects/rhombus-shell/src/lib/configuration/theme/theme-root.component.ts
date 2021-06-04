import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { startWith } from 'rxjs/operators';
import { RhombusShellTheme } from '../../core/models/theme';
import { RhombusShellThemeService } from '../../core/services/theme.service';
import { RhombusShellThemeComponent } from '../theme/theme.component';
import { RhombusShellRootConfigurationComponent } from '../_models/root-configuration';

@Component({
  selector: 'rh-shell-themes',
  template: '',
  providers: [
    {
      provide: RhombusShellRootConfigurationComponent,
      useExisting: RhombusShellThemeRootComponent,
    },
  ],
})
export class RhombusShellThemeRootComponent implements RhombusShellRootConfigurationComponent, AfterContentInit {

  @ContentChildren(RhombusShellThemeComponent)
  themeConfigs?: QueryList<RhombusShellThemeComponent>;

  constructor(private themeService: RhombusShellThemeService) { }

  ngAfterContentInit() {
    // if (this.themeConfigs) {
    //   this.themeConfigs.changes.pipe(
    //     startWith(this.themeConfigs),
    //   ).subscribe((shellThemes: QueryList<RhombusShellThemeComponent>) => {
    //     // this.updateAvailableThemes(shellThemes);
    //   });
    // }

    this.themeService.setInitialDarkMode();
  }

  refresh() {
    // this.themeService.setInitialDarkMode();
  }

  // private updateAvailableThemes(configs: QueryList<RhombusShellThemeComponent>) {
  //   const themes = configs
  //     .map(config => config.toModel())
  //     .filter((theme): theme is RhombusShellTheme => theme !== undefined);
  //   this.themeService.updateAvailableThemes(themes);
  // }

}
