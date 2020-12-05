import { Component, OnInit } from '@angular/core';
import { RhombusShellNavEntry, RhombusShellThemeService } from 'projects/rhombus-shell';
import { Observable } from 'rxjs';

@Component({
  selector: 'rhombus-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class RhombusAppComponent implements OnInit {

  _darkMode$: Observable<boolean>;
  title = 'Rhombus';

  navEntries: RhombusShellNavEntry[] = [
    {
      name: 'Home',
      route: 'home',
    },
    {
      name: 'Getting Started',
      route: 'getting-started',
    },
    {
      name: 'Rhombus',
      children: [
        {
          name: 'Introduction',
          route: 'rhombus/intro',
        },
        {
            name: 'Backlog',
            route: 'rhombus/backlog',
        },
        {
            name: 'Latest News',
            route: 'rhombus/latest-news',
        },
      ],
    },
    {
      name: 'Rhombus Shell Components',
      children: [
        {
          name: 'Introduction',
          route: 'rhombus-shell/intro',
        },
        {
          name: 'Wrapper',
          route: 'rhombus-shell/wrapper',
        },
        {
          name: 'Header',
          route: 'rhombus-shell/header',
        },
        {
          name: 'Sidenav',
          route: 'rhombus-shell/sidenav',
        },
        {
          name: 'Settings',
          route: 'rhombus-shell/settings',
        },
      ],
    },
  ];

  constructor(private themeService: RhombusShellThemeService) {
    this._darkMode$ = this.themeService.darkMode$;
   }

  ngOnInit() {}
}
