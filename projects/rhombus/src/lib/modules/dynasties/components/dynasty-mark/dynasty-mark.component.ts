import { Component, Input, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RhAuthService } from '../../../../services/auth.service';
import { IDynasty, IDynastyMark } from '../../models/dynasty';
import { RhDynastyMarkAddComponent } from './add/add.component';
import { RhDynastyMarkService } from './services/dynasty-mark.service';
import { RhDynastyMarkShowAllComponent } from './show-all/show-all.component';

export interface DynastyMarkAddEditData {
  version: number;
}

export interface DynastyMarkCollection {
  name: string;
  description: string;
  gameId: number;
}

@Component({
  selector: 'rh-dynasty-mark',
  templateUrl: './dynasty-mark.component.html',
  styleUrls: ['./dynasty-mark.component.scss'],
  providers: [RhDynastyMarkService],
})
export class RhDynastyMarkComponent implements OnInit {

  @Input()
  dynasty?: IDynasty;

  dynastyMarkCollection: IDynastyMark[] = [];
  dynastyMarkCollection$: Observable<IDynastyMark[]>;

  isOwner = false;
  compact$: Observable<boolean>;
  currentDynastyMarkId: string;

  // tslint:disable-next-line:max-line-length
  constructor(private media: MediaObserver, private authService: RhAuthService, private router: Router, private dynastyMarkService: RhDynastyMarkService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.compact$ = this.media.asObservable().pipe(
      map(mediaMatch => {
        return !mediaMatch.find(change => change.mqAlias === 'gt-xs');
      }),
    );

    this.authService.user$.subscribe(res => {
      this.isOwner = this.authService.isOwner(res);
    });

    this.dynastyMarkCollection$ = this.dynastyMarkService.getDynastyMarkCollection$(this.dynasty.id);

    this.dynastyMarkService.getDynastyMarkCollection$(this.dynasty.id).subscribe(res => {
      this.dynastyMarkCollection = res;
    });
  }

  goToCurrentMark() {
    this.router.navigateByUrl(`/rhombus/dynasties/${this.dynasty.id}/mark/${this.dynastyMarkCollection[0].id}`);
  }

  showAll() {
    this.dialog.open(RhDynastyMarkShowAllComponent, {
      width: '250px',
      data: this.dynastyMarkCollection,
    });
  }

  addNew() {
    const version = this.dynastyMarkCollection.length ? this.dynastyMarkCollection.length + 1 : 1;

    const dialogRef = this.dialog.open(RhDynastyMarkAddComponent, {
      width: '250px',
      data: { version },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dynastyMarkService.createDynastyMark(result);
      }
    });
  }

}
