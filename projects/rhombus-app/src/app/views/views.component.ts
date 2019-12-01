import { Component, OnInit } from '@angular/core';
import { RhombusShellNavItem } from 'projects/rhombus-shell/src/lib/models/shell-nav-item';

@Component({
  selector: 'rhombus-app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})
export class RhombusAppViewsComponent implements OnInit {

  title = 'Rhombus App';

  navItems: RhombusShellNavItem[] = [
    {
      label: 'Library',
      route: '/library',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
