import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from '../../services/app.service';
import { RhShellApplicationInfoService } from '../../services/application-info.service';

@Component({
  selector: 'rh-shell-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class RhShellAboutComponent implements OnInit {

  compact$: Observable<boolean>;

  _appName: string;
  _appVersion: string;
  _appLogoLetters?: string;
  _appLogoUrl?: string;
  _appTwitterUrl?: string;
  _appChangelogUrl?: string;

  constructor(private applicationInfo: RhShellApplicationInfoService, private media: MediaObserver, private appService: AppService) {

  }

  ngOnInit() {
    this.compact$ = this.media.asObservable().pipe(
      map(mediaMatch => {
        return !mediaMatch.find(change => change.mqAlias === 'gt-xs');
      }),
    );

    this.appService.getAppMetadata$(this.applicationInfo.firebaseMetadataId).subscribe(res => {
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
