import { Component, Input, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DynastiesService } from './dynasties.service';
import { IDynasty } from './dynasty/dynasty';

@Component({
  selector: 'rh-dynasties',
  templateUrl: './dynasties.component.html',
  styleUrls: ['./dynasties.component.scss'],
})
export class RhDynastiesComponent implements OnInit {

  compact$: Observable<boolean>;

  @Input()
  dynasties: IDynasty[];

  _selectedDynasty: IDynasty = undefined;

  constructor(private media: MediaObserver) {}

  ngOnInit() {
    this.compact$ = this.media.asObservable().pipe(
      map(mediaMatch => {
        return !mediaMatch.find(change => change.mqAlias === 'gt-xs');
      }),
    );
  }

}
