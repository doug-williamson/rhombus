import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { ActivatedRoute } from '@angular/router';
import { IDynasty, IDynastyMark } from '@dougwilliamson/rhombus';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { RhDynastiesService } from '../../services/dynasties.service';

@Component({
  selector: 'rh-dynasty',
  templateUrl: './dynasty.component.html',
  styleUrls: ['./dynasty.component.scss'],
})
export class RhDynastyComponent implements OnInit {

  @Input()
  readOnly: boolean = undefined;

  dynasty$: Observable<IDynasty>;
  dynastyMarkCollection: IDynastyMark[];

  dynastyId: string;
  markId: string;
  markVersion: number;

  compact$: Observable<boolean>;

  constructor(private media: MediaObserver, private dynastiesService: RhDynastiesService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.compact$ = this.media.asObservable().pipe(
      map(mediaMatch => {
        return !mediaMatch.find(change => change.mqAlias === 'gt-xs');
      }),
    );

    this.route.params.subscribe(params => {
      this.dynastyId = params.id;

      this.dynasty$ = this.dynastiesService.getDynasty$(this.dynastyId);
      // this.dynastiesService.getDynastyMark$(this.dynastyId).subscribe(res => {
      //   this.dynastyMarkCollection = res;

      //   this.markId = res[0].id;
      //   this.markVersion = res[0].version;
      // });
    });
  }

}
