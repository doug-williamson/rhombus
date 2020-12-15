import { Component, Input, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IDynastyWeek } from '../dynasty/dynasty';

@Component({
  selector: 'rh-dynasty-weeks',
  templateUrl: './weeks.component.html',
  styleUrls: ['./weeks.component.scss'],
})
export class RhDynastyWeeksComponent implements OnInit {

  compact$: Observable<boolean>;

  @Input()
  weeks: IDynastyWeek[] = undefined;

  constructor(private media: MediaObserver) { }

  ngOnInit(): void {
    this.compact$ = this.media.asObservable().pipe(
      map(mediaMatch => {
        return !mediaMatch.find(change => change.mqAlias === 'lt-sm');
      }),
    );
  }

}
