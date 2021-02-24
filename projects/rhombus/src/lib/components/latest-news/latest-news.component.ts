import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RhAuthService } from '../../services/auth.service';
import { RhLatestNewsAddEditComponent } from './add-edit/add-edit.component';
import { RhLatestNewsDeleteComponent } from './delete/delete.component';
import { ILatestNews } from './latest-news';
import { LatestNewsService } from './latest-news.service';

export interface LNAddEditDialogData {
  timestamp: any;
  title: string;
  description: string;
}

export interface LNDeleteDialogData {
  message: string;
}

@Component({
  selector: 'rh-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class LatestNewsComponent implements OnInit {

  @Input()
  readOnly: boolean = undefined;

  latestNews: ILatestNews[];
  expandedLatestNews: ILatestNews | null;
  compact$: Observable<boolean>;
  displayedColumns: string[] = ['timestamp', 'title', 'admin'];

  // tslint:disable-next-line:max-line-length
  constructor(private media: MediaObserver, private dialog: MatDialog, private latestNewsService: LatestNewsService, private authService: RhAuthService) {}

  ngOnInit() {
    this.compact$ = this.media.asObservable().pipe(
      map(mediaMatch => {
        return !mediaMatch.find(change => change.mqAlias === 'gt-xs');
      }),
    );

    this.latestNewsService.getLatestNews$().subscribe(res => {
      this.latestNews = res;
    });

    this.authService.user$.subscribe(res => {
      if (this.readOnly === undefined) {
        this.readOnly = !this.authService.canEdit(res);
      }
    });
  }

  addNew() {
    const dialogRef = this.dialog.open(RhLatestNewsAddEditComponent, {
      width: '250px',
      data: { timestamp: new Date(), title: null, description: null },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.latestNewsService.createLatestNewsItem(result);
      }

    });
  }

  edit(element) {
    const dialogRef = this.dialog.open(RhLatestNewsAddEditComponent, {
      width: '250px',
      data: { timestamp: element.timestamp, title: element.title, description: element.description },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.latestNewsService.updateLatestNewsItem(element.id, result);
      }

    });
  }

  delete(element) {
    const dialogRef = this.dialog.open(RhLatestNewsDeleteComponent, {
      width: '350px',
      data: { message: 'Are you sure you want to delete: ' + element.title + '?' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.latestNewsService.deleteLatestNewsItem(element.id);
      }

    });
  }
}
