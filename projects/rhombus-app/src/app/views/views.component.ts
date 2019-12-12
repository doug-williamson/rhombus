import { Component, OnInit } from '@angular/core';
import { RhombusShellNavItem } from 'projects/rhombus-shell';
import { RhombusShellThemeService } from 'projects/rhombus-shell';
import { Observable } from 'rxjs';

@Component({
  selector: 'rhombus-app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss'],
})
export class RhombusAppViewsComponent implements OnInit {

  _isDarkTheme: Observable<boolean>;
  title = 'rhombus';

  navItems: RhombusShellNavItem[] = [
    {
      label: 'Rhombus Shell',
      route: '/rhombus-shell',
    },
  ];

  constructor(
    private themeService: RhombusShellThemeService) { }

  ngOnInit() {
    this._isDarkTheme = this.themeService.darkThemeSubject.asObservable();
  }

}
