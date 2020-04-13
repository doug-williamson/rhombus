import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Observable } from 'rxjs';
import { RhombusShellTheme } from '../../../models/theme';
import { RhombusShellThemeService } from '../../../services/theme.service';

@Component({
  selector: 'rhombus-shell-theme-setting',
  templateUrl: './theme-setting.component.html',
  styleUrls: ['./theme-setting.component.scss'],
})
export class RhombusShellThemeSettingComponent  {

  _themes$: Observable<RhombusShellTheme[]>;
  _currentTheme$: Observable<RhombusShellTheme | undefined>;

  constructor(private themeService: RhombusShellThemeService) {
    this._themes$ = this.themeService.availableThemes$;
    this._currentTheme$ = this.themeService.currentTheme$;

    this._themes$ = this.themeService.availableThemes$;
   }

  onThemeChange(change: MatSelectChange) {
    this.themeService.updateTheme(change.value);
  }

}
