import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IDynasty } from '../../models/dynasty';
import { RhDynastiesService } from '../../services/dynasties.service';
import { RhDynastiesAddEditComponent } from './add-edit/add-edit.component';
import { RhDynastiesDeleteComponent } from './delete/delete.component';

export interface DynastiesAddEditDialogData {
  name: string;
  description: string;
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

  @Input()
  readOnly: boolean = undefined;

  panelOpenState = false;
  compact$: Observable<boolean>;
  dynasties$: Observable<IDynasty[]>;

  constructor(private media: MediaObserver, private dialog: MatDialog, private dynastiesService: RhDynastiesService) {}

  ngOnInit() {
    this.compact$ = this.media.asObservable().pipe(
      map(mediaMatch => {
        return !mediaMatch.find(change => change.mqAlias === 'gt-xs');
      }),
    );

    this.dynasties$ = this.dynastiesService.getDynasties$();
  }

  addNewDynasty() {
    const dialogRef = this.dialog.open(RhDynastiesAddEditComponent, {
      width: '250px',
      data: { status: '1', text: null },
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
      data: { name: element.name, description: element.description },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dynastiesService.updateDynasty(element.id, result);
      }

    });
  }

  delete(element) {
    const dialogRef = this.dialog.open(RhDynastiesDeleteComponent, {
      width: '350px',
      data: { message: 'Are you sure you want to delete: ' + element.name + '?' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dynastiesService.deleteDynasty(element.id);
      }

    });
  }

  // goToRoute(dynasty: IDynasty) {
  //   this.router.navigate([`/rhombus/dynasties/${ dynasty.id }`]);
  // }



}
