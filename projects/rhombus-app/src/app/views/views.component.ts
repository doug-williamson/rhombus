import { Component, OnInit } from '@angular/core';
import { RhombusShellNavItem } from 'projects/rhombus-shell/src/lib/core/models/shell-nav-item';
import { RhombusShellThemeService } from 'projects/rhombus-shell/src/lib/core/services/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'rhombus-app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})
export class RhombusAppViewsComponent implements OnInit {

  _isDarkTheme: Observable<boolean>;
  title = 'Rhombus App';

  navItems: RhombusShellNavItem[] = [
    {
      label: 'Library',
      route: '/library',
    }
  ]

  constructor(
    private themeService: RhombusShellThemeService) { }

  ngOnInit() {
    this._isDarkTheme = this.themeService.isDarkTheme;
  }

}
