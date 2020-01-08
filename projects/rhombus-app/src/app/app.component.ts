import { Component, OnInit } from '@angular/core';
import { RhombusShellNavItem } from 'projects/rhombus-shell';
import { Observable } from 'rxjs';

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

  constructor() { }

  ngOnInit() {}
}
