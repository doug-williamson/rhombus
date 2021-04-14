import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RhAuthService } from '../../../../services/auth.service';
import { IDynasty } from '../../models/dynasty';
import { RhDynastiesService } from '../../services/dynasties.service';
import { RhDynastiesAddEditComponent } from './add-edit/add-edit.component';

export interface DynastiesAddEditDialogData {
  name: string;
  description: string;
  gameId: number;
}

export interface DynastiesDeleteDialogData {
  message: string;
}

@Component({
  selector: 'rh-dynasties',
  templateUrl: './dynasties.component.html',
  styleUrls: ['./dynasties.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RhDynastiesComponent implements OnInit {

  isOwner: boolean;
  panelOpenState = false;
  compact$: Observable<boolean>;
  dynasties$: Observable<IDynasty[]>;

  // tslint:disable-next-line:max-line-length
  constructor(private media: MediaObserver, private dialog: MatDialog, private authService: RhAuthService, private dynastiesService: RhDynastiesService) {}

  ngOnInit() {
    this.compact$ = this.media.asObservable().pipe(
      map(mediaMatch => {
        return !mediaMatch.find(change => change.mqAlias === 'gt-xs');
      }),
    );

    this.authService.user$.subscribe(res => {
      this.isOwner = this.authService.isOwner(res);
    });

    this.dynasties$ = this.dynastiesService.getDynasties$();
  }

  addNew() {
    const dialogRef = this.dialog.open(RhDynastiesAddEditComponent, {
      width: '250px',
      data: { name: null, description: null, gameId: '1' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dynastiesService.createDynasty(result);
      }

    });
  }

  edit(element) {
    const dialogRef = this.dialog.open(RhDynastiesAddEditComponent, {
      width: '250px',
      data: { name: element.name, description: element.description, gameId: element.gameId },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dynastiesService.updateDynasty(element.id, result);
      }
    });
  }

  // goToRoute(dynasty: IDynasty) {
  //   this.router.navigate([`/rhombus/dynasties/${ dynasty.id }`]);
  // }



}
