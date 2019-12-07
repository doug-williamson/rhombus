import { Component, OnInit, Input } from '@angular/core';
import { RhombusShellNavItem } from '../../models/shell-nav-item';

@Component({
  selector: 'rhombus-shell-nav',
  templateUrl: './shell-nav.component.html',
  styleUrls: ['./shell-nav.component.scss']
})
export class RhombusShellNavComponent implements OnInit {

  @Input()
  navItems: RhombusShellNavItem[];
  
  constructor() { }

  ngOnInit() {
  }

}
