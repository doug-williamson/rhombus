import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ILatestNews } from './latest-news';

@Component({
  selector: 'rh-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class LatestNewsComponent implements OnInit {

  compact$: Observable<boolean>;

  displayColumns: string[] = ['timestamp', 'title'];
  expandedLatestNews: ILatestNews | null;

  @Input()
  latestNews: ILatestNews[];

  constructor(private media: MediaObserver) {}

  ngOnInit() {
    this.compact$ = this.media.asObservable().pipe(
      map(mediaMatch => {
        return !mediaMatch.find(change => change.mqAlias === 'lt-sm');
      }),
    );
  }
}
