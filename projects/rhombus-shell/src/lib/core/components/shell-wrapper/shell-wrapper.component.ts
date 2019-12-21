import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { RhombusShellNavItem } from '../../models/shell-nav-item';
import { RhombusShellNavService } from '../../services/nav.service';

@Component({
  selector: 'rhombus-shell-wrapper',
  templateUrl: './shell-wrapper.component.html',
  styleUrls: ['./shell-wrapper.component.scss'],
})
export class RhombusShellWrapperComponent implements OnInit {

  _isMobile = false;
  _isOpened = false;

  @Input()
  title: string;

  @Input()
  navItems: RhombusShellNavItem[];

  constructor(
    public navService: RhombusShellNavService, 
    private breakpointObserver: BreakpointObserver) {

  }

  ngOnInit() {
    this.navService.showSidenav$.subscribe(results => {
      this._isOpened = results;
    });

    this.breakpointObserver.observe([Breakpoints.XSmall])
    .subscribe((state: BreakpointState) => {
      this._isMobile = state.matches;
      this._isOpened = false;
    });

    this.breakpointObserver.observe([Breakpoints.Large, Breakpoints.XLarge])
    .subscribe((state: BreakpointState) => {
      this._isOpened = state.matches;
    });
  }



}
