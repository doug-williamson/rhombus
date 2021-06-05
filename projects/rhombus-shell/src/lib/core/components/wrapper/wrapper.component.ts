import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { RhShellNavCollection } from '../../models/shell-nav-item';
import { AppService } from '../../services/app.service';
import { RhShellNavService } from '../../services/nav.service';
import { RhShellThemeService } from '../../services/theme.service';
import { BreadCrumb } from './breadcrumb';
import { slideInAnimation } from './shell-wrapper-animation';

@Component({
  selector: 'rh-shell-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
  animations: [slideInAnimation],
})
export class RhShellWrapperComponent implements OnInit {

  _isMobile = false;
  _isOpened = false;
  _themeClassName$: Observable<string>;
  _breadcrumbs$: Observable<BreadCrumb[]>;
  _routeName: string;

  @Input()
  title: string;

  @Input()
  navCollection: RhShellNavCollection[];

  constructor(
    private navService: RhShellNavService,
    private themeService: RhShellThemeService,
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private appService: AppService) {
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
      map(() => this.buildBreadCrumb(this.activatedRoute.root)));

    this.breakpointObserver.observe([Breakpoints.XSmall])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.navService.setState(false);
        this._isMobile = true;
      }
    });

    this.breakpointObserver.observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.navService.setState(true);
        this._isMobile = false;
      }
    });

    this.appService.getAppMetadata$('HkxoJ5pwH1mTEGh3FWww').subscribe(res => {
      // console.log(res);
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
