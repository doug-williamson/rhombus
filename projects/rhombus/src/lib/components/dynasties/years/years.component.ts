import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs/internal/Observable';
import { DynastiesService } from '../dynasties.service';
import { IDynastyWeek, IDynastyYear } from '../dynasty/dynasty';

@Component({
  selector: 'rh-dynasty-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class RhDynastyYearsComponent implements OnInit {

  displayedColumns: string[] = ['week', 'opponent', 'home', 'result', 'description', 'link'];
  displayedColumnsMobile: string[] = ['week', 'opponent', 'home', 'result'];
  expandedWeek: IDynastyWeek | null;

  @Input()
  years: IDynastyYear[] = undefined;

  _selectedYear: IDynastyYear = undefined;
  dynastyYears$: Observable<IDynastyYear[]>;
  dynastyWeeks: IDynastyWeek[];

  constructor(public media: MediaObserver, private dynastiesService: DynastiesService) {}

  ngOnInit(): void {
    this.dynastyYears$ = this.dynastiesService.getDynastyMarkYears$();
    this.dynastiesService.getIDynastyWeeks$().subscribe(data => {
      this.dynastyWeeks = data as IDynastyWeek[];
    })
  }

  goToLink(url: string) {

    window.open(url, '_blank');
  }

}