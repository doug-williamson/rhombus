import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from '../../services/app.service';
import { RhombusShellApplicationInfoService } from '../../services/application-info.service';

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

  constructor(private applicationInfo: RhombusShellApplicationInfoService, private media: MediaObserver, private appService: AppService) {

  }

  ngOnInit() {
    this.compact$ = this.media.asObservable().pipe(
      map(mediaMatch => {
        return !mediaMatch.find(change => change.mqAlias === 'gt-xs');
      }),
    );

    this.appService.getAppMetadata$('HkxoJ5pwH1mTEGh3FWww').subscribe(res => {
      this._appName = res.app_name;
      this._appVersion = res.app_version;
      this._appLogoLetters = this.applicationInfo.logoLetters;
      this._appLogoUrl = this.applicationInfo.logoUrl;
      this._appTwitterUrl = res.twitter_url;
      this._appChangelogUrl = res.app_changelog;
    });
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
