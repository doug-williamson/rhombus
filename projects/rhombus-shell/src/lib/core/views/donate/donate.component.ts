import { Component, OnInit } from '@angular/core';
import { IShellDonate, RhShellDonateService } from './shell-donate.service';

@Component({
  selector: 'rh-shell-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss'],
})
export class RhShellDonateComponent implements OnInit {

  donate: IShellDonate;

  constructor(private donateService: RhShellDonateService) {
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
