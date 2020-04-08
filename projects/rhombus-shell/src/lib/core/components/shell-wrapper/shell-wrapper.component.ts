import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RhombusShellNavItem } from '../../models/shell-nav-item';
import { RhombusShellNavService } from '../../services/nav.service';
import { RhombusShellThemeService } from '../../services/theme.service';

@Component({
  selector: 'rhombus-shell-wrapper',
  templateUrl: './shell-wrapper.component.html',
  styleUrls: ['./shell-wrapper.component.scss'],
})
export class RhombusShellWrapperComponent implements OnInit {

  _isMobile = false;
  _isOpened = false;
  _themeClassName$: Observable<string>;

  @Input()
  title: string;

  @Input()
  navItems: RhombusShellNavItem[];

  constructor(
    public navService: RhombusShellNavService,
    private themeService: RhombusShellThemeService,
    private breakpointObserver: BreakpointObserver) {
      this._themeClassName$ = this.themeService.currentTheme$.pipe(
        map(theme => theme ? theme.className : ''),
      );
  }

  ngOnInit() {
    this.navService.showSidenav$.subscribe(results => {
      this._isOpened = results;
    });

    this.breakpointObserver.observe([Breakpoints.XSmall])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.navService.setState(false);
        this._isMobile = true;
      }
    });

    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.navService.setState(true);
        this._isMobile = false;
      }
    });
  }

  closedSidenav() {
    this.navService.close();
  }

}
