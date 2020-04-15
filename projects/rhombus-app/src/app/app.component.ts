import { Component, OnInit } from '@angular/core';
import { RhombusShellNavItem, RhombusShellThemeService } from 'projects/rhombus-shell';
import { Observable } from 'rxjs';

@Component({
  selector: 'rhombus-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class RhombusAppComponent implements OnInit {

  _darkMode$: Observable<boolean>;
  title = 'rhombus';

  navItems: RhombusShellNavItem[] = [
    {
      label: 'Rhombus Shell',
      route: '/rhombus-shell',
    },
  ];

  constructor(private themeService: RhombusShellThemeService) {
    this._darkMode$ = this.themeService.darkMode$;
   }

  ngOnInit() {}
}
