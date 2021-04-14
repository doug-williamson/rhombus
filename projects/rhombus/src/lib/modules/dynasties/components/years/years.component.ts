import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IDynastyMark, IDynastyYear } from '@dougwilliamson/rhombus';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { RhAuthService } from '../../../../services/auth.service';
import { RhDynastyMarkYearsService } from '../../services/years.service';
import { RhDynastyMarkService } from '../dynasty-mark/services/dynasty-mark.service';
import { RhDynastyMarkYearAddComponent } from './add/add.component';

export interface DynastyMarkYearAddData {
  year: number;
  team: string;
  weeks: undefined,
  positionId: number;
}

@Component({
  selector: 'rh-dynasty-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.scss'],
})
export class RhDynastyYearsComponent implements OnInit {

  @Input()
  dynastyName: string;

  isOwner: boolean;
  dynastyMark: IDynastyMark;
  dynastyId: string;
  markId: string;
  displayedColumns: string[] = ['year', 'position', 'team', 'record', 'admin'];
  years: IDynastyYear[] = undefined;
  compact$: Observable<boolean>;
  _selectedYear: IDynastyYear = undefined;

  constructor(
    private media: MediaObserver,
    private router: Router,
    private route: ActivatedRoute,
    private dynastyMarkService: RhDynastyMarkService,
    private dynastyYearsService: RhDynastyMarkYearsService,
    private dialog: MatDialog,
    private authService: RhAuthService) {
  }

  ngOnInit(): void {
    this.compact$ = this.media.asObservable().pipe(
      map(mediaMatch => {
        return !mediaMatch.find(change => change.mqAlias === 'gt-xs');
      }),
    );

    this.route.params.subscribe(params => {
      this.dynastyId = params.id;
      this.markId = params.markId;

      this.dynastyMarkService.getDynastyMark$(this.dynastyId, this.markId).subscribe(res => {
        this.dynastyMark = res;
      });

      this.dynastyYearsService.getYears$(this.dynastyId, this.markId).subscribe(res => {
        this.years = res;
      });
    });

    this.authService.user$.subscribe(res => {
      this.isOwner = this.authService.isOwner(res);
    });
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }

  selectYear(year) {
    this.router.navigate([`./years/${year.id}`], { relativeTo: this.route });
  }

  addNew() {
    const newYear: IDynastyYear = {
      id: undefined,
      positionId: '1',
      team: '',
      year: this.years.length ? this.years.length + 1 : 1,
      weeks: [],
    };

    const dialogRef = this.dialog.open(RhDynastyMarkYearAddComponent, {
      width: '250px',
      data: newYear,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dynastyYearsService.createYear(result);
      }
    });
  }

  edit(year) {
    const dialogRef = this.dialog.open(RhDynastyMarkYearAddComponent, {
      width: '250px',
      data: year,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dynastyYearsService.updateYear(year.id, result);
      }

    });
  }

  goBack() {
    // TODO: better comment on why we're routing up two levels
    this.router.navigate(['../../..'], { relativeTo: this.route });
  }

}
