import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { RhombusShellNavEntry } from '../../models/shell-nav-item';
import { RhombusShellNavService } from '../../services/nav.service';
import { RhombusShellThemeService } from '../../services/theme.service';
import { BreadCrumb } from './breadcrumb';

@Component({
  selector: 'rh-shell-wrapper',
  templateUrl: './shell-wrapper.component.html',
  styleUrls: ['./shell-wrapper.component.scss'],
})
export class RhombusShellWrapperComponent implements OnInit {

  _isMobile = false;
  _isOpened = false;
  _themeClassName$: Observable<string>;
  _breadcrumbs$: Observable<BreadCrumb[]>;
  _routeName: string;

  @Input()
  title: string;

  @Input()
  navEntries: RhombusShellNavEntry[];

  constructor(
    private navService: RhombusShellNavService,
    private themeService: RhombusShellThemeService,
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
      this._themeClassName$ = this.themeService.currentTheme$.pipe(
        map(theme => theme ? theme.className : ''),
      );
  }

  ngOnInit() {
    this.navService.showSidenav$.subscribe(results => {
      this._isOpened = results;
    });

    this._breadcrumbs$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => this.buildBreadCrumb(this.activatedRoute.root)));

    this.breakpointObserver.observe([Breakpoints.XSmall])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.navService.setState(false);
        this._isMobile = true;
      }
    });

    this.breakpointObserver.observe([Breakpoints.Large, Breakpoints.XLarge])
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

  buildBreadCrumb(route: ActivatedRoute, url: string = '',
                  breadcrumbs: Array<BreadCrumb> = []): Array<BreadCrumb> {
    // If no routeConfig is avalailable we are on the root path
    const label = route.routeConfig ? route.routeConfig.data.breadcrumb : 'Home';
    const path = route.routeConfig ? route.routeConfig.path : '';
    // In the routeConfig the complete path is not available,
    // so we rebuild it each time
    const nextUrl = `${url}${path}`;
    const breadcrumb = {
      label,
      url: nextUrl,
    };
    const newBreadcrumbs = route.routeConfig ? [...breadcrumbs, breadcrumb] : [];

    // console.log(route);
    // console.log(url);
    // console.log(breadcrumbs);
    // console.log(newBreadcrumbs);

    if (route.firstChild) {
      // If we are not on our current path yet,
      // there will be more children to look after, to build our breadcumb
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }
    return newBreadcrumbs;
  }

}
