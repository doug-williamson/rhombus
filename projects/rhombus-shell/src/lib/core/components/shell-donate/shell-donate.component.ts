import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RhombusShellApplicationInfoService } from '../../services/application-info.service';
import { IShellDonate, ShellDonateService } from './shell-donate.service';

@Component({
  selector: 'rhombus-shell-shell-donate',
  templateUrl: './shell-donate.component.html',
  styleUrls: ['./shell-donate.component.scss']
})
export class RhombusShellDonateComponent implements OnInit {

  donate: IShellDonate;

  constructor(private donateService: ShellDonateService) {
  }

  ngOnInit() {
    this.donateService.getDonate$().subscribe(res => {
      this.donate = res[0];
    });
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }

}
