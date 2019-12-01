import { Component, OnInit, Input } from '@angular/core';
import { RhombusShellNavService } from '../../services/nav.service';
import { RhombusShellNavItem } from '../../models/shell-nav-item';

@Component({
  selector: 'rhombus-shell-wrapper',
  templateUrl: './shell-wrapper.component.html',
  styleUrls: ['./shell-wrapper.component.scss']
})
export class RhombusShellWrapperComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  navItems: RhombusShellNavItem[];

  _isOpened = true;

  constructor(public navService: RhombusShellNavService) { }

  ngOnInit() {
    this.navService.showSidenav$.subscribe(results => {
      this._isOpened = results;
    })
  }



}
