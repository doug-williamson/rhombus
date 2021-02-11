import { Component, Input, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RhBacklogAddEditComponent } from './add-edit/add-edit.component';
import { IBacklog } from './backlog';
import { BacklogService } from './backlog.service';
import { RhBacklogDeleteComponent } from './delete/delete.component';

export interface AddEditDialogData {
  status: string;
  text: string;
}

export interface DeleteDialogData {
  message: string;
}

@Component({
  selector: 'rh-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss'],
})
export class BacklogComponent implements OnInit {

  @Input()
  canEdit: boolean;

  backlog: IBacklog[];
  compact$: Observable<boolean>;
  displayedColumnsAdmin: string[] = ['text', 'status', 'admin'];
  displayedColumns: string[] = ['text', 'status'];

  constructor(private media: MediaObserver, private dialog: MatDialog, private backlogService: BacklogService) {}

  ngOnInit() {
    this.compact$ = this.media.asObservable().pipe(
      map(mediaMatch => {
        return !mediaMatch.find(change => change.mqAlias === 'gt-xs');
      }),
    );

    this.backlogService.getBacklog$().subscribe(res => {
      this.backlog = res;
    });
  }

  addNew() {
    const dialogRef = this.dialog.open(RhBacklogAddEditComponent, {
      width: '250px',
      data: { status: '1', text: null },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.backlogService.createBacklogItem(result);
      }

    });
  }

  edit(element) {
    const dialogRef = this.dialog.open(RhBacklogAddEditComponent, {
      width: '250px',
      data: { status: element.status, text: element.text },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.backlogService.updateBacklogItem(element.id, result);
      }

    });
  }

  delete(element) {
    const dialogRef = this.dialog.open(RhBacklogDeleteComponent, {
      width: '350px',
      data: { message: 'Are you sure you want to delete: ' + element.text + '?' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.backlogService.deleteBacklogItem(element.id);
      }

    });
  }
}
