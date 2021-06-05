import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Observable } from 'rxjs';
import { RhShellTheme } from '../../../models/theme';
import { RhShellThemeService } from '../../../services/theme.service';

@Component({
  selector: 'rh-shell-theme-setting',
  templateUrl: './theme-setting.component.html',
  styleUrls: ['./theme-setting.component.scss'],
})
export class RhShellThemeSettingComponent  {

  _themes$: Observable<RhShellTheme[]>;
  _currentTheme$: Observable<RhShellTheme | undefined>;

  constructor(private themeService: RhShellThemeService) {
    this._themes$ = this.themeService.availableThemes$;
    this._currentTheme$ = this.themeService.currentTheme$;

    this._themes$ = this.themeService.availableThemes$;
   }

  onThemeChange(change: MatSelectChange) {
    // this.themeService.updateTheme(change.value);
  }

}
