import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { IDynastyWeek } from '@dougwilliamson/rhombus';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'rh-dynasty-weeks',
  templateUrl: './weeks.component.html',
  styleUrls: ['./weeks.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class RhDynastyWeeksComponent implements OnInit {

    displayedColumns: string[] = ['week', 'opponent', 'home', 'result', 'description', 'link'];
    displayedColumnsMobile: string[] = ['week', 'opponent', 'home', 'result'];
    expandedWeek: IDynastyWeek | null;

    compact$: Observable<boolean>;

    @Input()
    weeks: IDynastyWeek[] = undefined;

    constructor(private media: MediaObserver) { }

    ngOnInit(): void {
        this.compact$ = this.media.asObservable().pipe(
            map(mediaMatch => {
                return !mediaMatch.find(change => change.mqAlias === 'gt-xs');
            }),
        );
    }

    goToLink(url: string) {
      window.open(url, '_blank');
    }

}
