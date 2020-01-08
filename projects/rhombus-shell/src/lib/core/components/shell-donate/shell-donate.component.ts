import { Component, OnInit } from '@angular/core';
import { RhombusShellApplicationInfoService } from '../../services/application-info.service';

@Component({
  selector: 'rhombus-shell-shell-donate',
  templateUrl: './shell-donate.component.html',
  styleUrls: ['./shell-donate.component.scss']
})
export class RhombusShellDonateComponent implements OnInit {

  _appDonateUrl?: string;

  constructor(private applicationInfo: RhombusShellApplicationInfoService) {
    this._appDonateUrl = this.applicationInfo.donateUrl;
  }

  ngOnInit() {
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }

}
