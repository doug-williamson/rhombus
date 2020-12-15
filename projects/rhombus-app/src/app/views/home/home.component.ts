import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { ILatestNews } from '@dougwilliamson/rhombus';
import { IBacklog } from 'projects/rhombus/src/lib/components/backlog/backlog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BacklogService } from '../rhombus/backlog/backlog.service';
import { LatestNewsService } from '../rhombus/latest-news/latest-news.service';

@Component({
  selector: 'rh-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class RhombusAppHomeComponent implements OnInit {

  compact$: Observable<boolean>;
  latestNews: ILatestNews[];
  backlog: IBacklog[];
  _columns = 1;
  _headerText = 'Coming Soon';
  _color = 'primary';

  // tslint:disable-next-line:max-line-length
  constructor(private media: MediaObserver, private breakpointObserver: BreakpointObserver, private backlogService: BacklogService, private latestNewsService: LatestNewsService) { }

  ngOnInit() {
    this.compact$ = this.media.asObservable().pipe(
      map(mediaMatch => {
        return !mediaMatch.find(change => change.mqAlias === 'lt-sm');
      }),
    );

    this.backlogService.getBacklog$().subscribe(res => {
        this.backlog = res;
    });

    this.latestNewsService.getLatestNews$().subscribe(res => {
        this.latestNews = res;
    });

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
