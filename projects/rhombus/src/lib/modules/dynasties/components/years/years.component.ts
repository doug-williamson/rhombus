import { ComponentPortal } from '@angular/cdk/portal';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { ActivatedRoute } from '@angular/router';
import { IDynastyMark, IDynastyYear } from '@dougwilliamson/rhombus';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { RhDynastyMarkService } from '../../services/dynasty-mark.service';
import { RhDynastyYearsService } from '../../services/years.service';

@Component({
  selector: 'rh-dynasty-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.scss'],
})
export class RhDynastyYearsComponent implements OnInit {

  @Input()
  readOnly: boolean = undefined;

  dynastyMark: IDynastyMark;
  dynastyId: string;
  markId: string;
  displayedColumns: string[] = ['year', 'position', 'team', 'record'];
  years: IDynastyYear[] = undefined;
  compact$: Observable<boolean>;
  _selectedYear: IDynastyYear = undefined;

  // tslint:disable-next-line:max-line-length
  constructor(private media: MediaObserver, private route: ActivatedRoute, private dynastyMarkService: RhDynastyMarkService, private dynastyYearsService: RhDynastyYearsService) {}

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

      this.dynastyYearsService.getDynastyYears$(this.dynastyId, this.markId).subscribe(res => {
        this.years = res;
      });
    });
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }

  readPost(post) {
    // const dialogRef = this.dialog.open(RhBlogPostComponent, {
    //   data: { timestamp: post.timestamp, title: post.title, paragraphs: post.paragraphs },
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   //
    // });
  }

  addNew() {
    // const dialogRef = this.dialog.open(RhBlogAddEditComponent, {
    //   data: { timestamp: new Date(), title: null, paragraphs: null },
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.blogService.createBlogPost(result);
    //   }

    // });
  }

  delete(element) {
    // const dialogRef = this.dialog.open(RhBlogDeleteComponent, {
    //   width: '350px',
    //   data: { message: 'Are you sure you want to delete: ' + element.title + '?' },
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.blogService.deleteBlogPost(element.id);
    //   }

    // });
  }

  editPost(post) {
    // const dialogRef = this.dialog.open(RhBlogAddEditComponent, {
    //   data: { timestamp: post.timestamp, title: post.title, paragraphs: post.paragraphs },
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.blogService.updateBlogPost(post.id, result);
    //   }

    // });
  }

}
