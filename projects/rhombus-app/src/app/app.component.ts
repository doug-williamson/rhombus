import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RhombusShellNavItem, RhombusShellThemeService } from 'projects/rhombus-shell';

@Component({
  selector: 'rhombus-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class RhombusAppComponent implements OnInit {

  _isDarkTheme: Observable<boolean>;
  title = 'rhombus';

  navItems: RhombusShellNavItem[] = [
    {
      label: 'Rhombus Shell',
      route: '/rhombus-shell',
    },
  ];

  constructor(private themeService: RhombusShellThemeService) { }

  ngOnInit() {
    this._isDarkTheme = this.themeService.darkThemeSubject.asObservable();
  }
}
