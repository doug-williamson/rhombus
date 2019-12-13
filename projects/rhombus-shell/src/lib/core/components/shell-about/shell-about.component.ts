import { Component, OnInit } from '@angular/core';
import { RhombusShellApplicationInfoService } from '../../services/application-info.service';

@Component({
  selector: 'rhombus-shell-about',
  templateUrl: './shell-about.component.html',
  styleUrls: ['./shell-about.component.scss'],
})
export class RhombusShellAboutComponent implements OnInit {

  _appName: string;
  _appVersion: string;
  _appLogoLetters?: string;
  _appLogoUrl?: string;
  _appTwitterUrl?: string;

  constructor(private applicationInfo: RhombusShellApplicationInfoService) {
    this._appName = this.applicationInfo.name;
    this._appVersion = this.applicationInfo.version;
    this._appLogoLetters = this.applicationInfo.logoLetters;
    this._appLogoUrl = this.applicationInfo.logoUrl;
    this._appTwitterUrl = this.applicationInfo.twitterUrl;
  }

  ngOnInit() {
  }

  gotoLink(url: string) {
    window.open(url, '_blank');
  }
}