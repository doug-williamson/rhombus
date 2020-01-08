import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rhombus-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class RhombusAppHomeComponent implements OnInit {

  _columns = 1;
  _headerText = 'Coming Soon';
  _color = 'primary';
  _contentList = [ 'Dark Mode', 'Responsive Design', 'Settings', 'Blog Posts', 'Surveys', 'Internationalization', 'Color Picker', 'Project TBD' ];

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.XSmall])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this._columns = 1;
      }
    });
    this.breakpointObserver.observe([Breakpoints.Small])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this._columns = 2;
      }
    });
    this.breakpointObserver.observe([Breakpoints.Medium, Breakpoints.Large])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this._columns = 3;
      }
    });
    this.breakpointObserver.observe([Breakpoints.XLarge])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this._columns = 4;
      }
    });
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }

}
