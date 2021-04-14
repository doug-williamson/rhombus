import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IDynastyWeek } from '@dougwilliamson/rhombus';
import { RhAuthService } from 'projects/rhombus/src/lib/services/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RhDynastyMarkYearWeeksService } from '../../services/weeks.service';
import { RhDynastyMarkYearWeekAddEditComponent } from './add-edit/add-edit.component';

export interface DynastyMarkYearWeekAddData {
  week: number;
  home: boolean;
  opponent: string;
  ourScore: number;
  theirScore: number;
  link: string;
  result: string;
  description: string;
}

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

  weeks: IDynastyWeek[] = undefined;
  isOwner: boolean;
  dynastyId: string;
  markId: string;
  yearId: string;
  displayedColumns: string[] = ['week', 'opponent', 'home', 'result'];
  expandedWeek: IDynastyWeek | null;
  compact$: Observable<boolean>;

  constructor(
    private media: MediaObserver,
    private router: Router,
    private route: ActivatedRoute,
    private authService: RhAuthService,
    private dialog: MatDialog,
    private weeksService: RhDynastyMarkYearWeeksService) { }

  ngOnInit(): void {
    this.compact$ = this.media.asObservable().pipe(
      map(mediaMatch => {
        return !mediaMatch.find(change => change.mqAlias === 'gt-xs');
      }),
    );

    this.route.params.subscribe(params => {
      this.dynastyId = params.id;
      this.markId = params.markId;
      this.yearId = params.yearId;

      this.weeksService.getWeeks$(this.dynastyId, this.markId, this.yearId).subscribe(res => {
        this.weeks = res;
      });
    });

    this.authService.user$.subscribe(res => {
      this.isOwner = this.authService.isOwner(res);
    });
  }

  addNew() {
    const newWeek: IDynastyWeek = {
      id: undefined,
      home: false,
      opponent: undefined,
      ourScore: undefined,
      theirScore: undefined,
      link: undefined,
      result: undefined,
      week: this.weeks.length ? this.weeks.length + 1 : 1,
    };

    const dialogRef = this.dialog.open(RhDynastyMarkYearWeekAddEditComponent, {
      width: '250px',
      data: newWeek,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.weeksService.createWeek(result);
      }
    });
  }

  edit(week) {
    const dialogRef = this.dialog.open(RhDynastyMarkYearWeekAddEditComponent, {
      width: '250px',
      data: week,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.weeksService.updateWeek(week.id, result);
      }
    });
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }

  goBack() {
    // TODO: better comment on why we're routing up two levels
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

}
