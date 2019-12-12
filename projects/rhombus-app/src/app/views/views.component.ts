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
  title = 'rhombus';

  navItems: RhombusShellNavItem[] = [
    {
      label: 'Getting Started',
      route: '/getting-started',
    },
    {
      label: 'Rhombus Shell',
      route: '/rhombus-shell',
    }
  ]

  constructor(
    private themeService: RhombusShellThemeService) { }

  ngOnInit() {
    this._isDarkTheme = this.themeService.darkThemeSubject.asObservable();
  }

}
