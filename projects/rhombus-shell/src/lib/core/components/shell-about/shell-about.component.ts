import { Component, OnInit } from '@angular/core';
import { RhombusShellApplicationInfoService } from '../../services/application-info.service';
import { MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'rh-shell-about',
  templateUrl: './shell-about.component.html',
  styleUrls: ['./shell-about.component.scss'],
})
export class RhombusShellAboutComponent implements OnInit {

  compact$: Observable<boolean>;

  _appName: string;
  _appVersion: string;
  _appLogoLetters?: string;
  _appLogoUrl?: string;
  _appTwitterUrl?: string;
  _appChangelogUrl?: string;

  constructor(private applicationInfo: RhombusShellApplicationInfoService, private media: MediaObserver) {
    this._appName = this.applicationInfo.name;
    this._appVersion = this.applicationInfo.version;
    this._appLogoLetters = this.applicationInfo.logoLetters;
    this._appLogoUrl = this.applicationInfo.logoUrl;
    this._appTwitterUrl = this.applicationInfo.twitterUrl;
    this._appChangelogUrl = this.applicationInfo.changelogUrl;
  }

  ngOnInit() {
    this.compact$ = this.media.asObservable().pipe(
      map(mediaMatch => {
        return !mediaMatch.find(change => change.mqAlias === 'lt-sm');
      }),
    );
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
