import { Component, Input, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBacklog } from './backlog';

@Component({
  selector: 'rh-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {

  compact$: Observable<boolean>;
  displayedColumns: string[] = ['status', 'text'];

  @Input()
  backlog: IBacklog[];

  constructor(private media: MediaObserver) {}

  ngOnInit() {
    this.compact$ = this.media.asObservable().pipe(
      map(mediaMatch => {
        return !mediaMatch.find(change => change.mqAlias === 'gt-xs');
      }),
    );
  }
}
