import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RhombusShellNavService } from '../../services/nav.service';
import { BreadCrumb } from '../shell-wrapper/breadcrumb';

@Component({
  selector: 'rh-shell-header',
  templateUrl: './shell-header.component.html',
  styleUrls: ['./shell-header.component.scss'],
})
export class RhombusShellHeaderComponent implements OnInit {
  timer;
  dateTimeStamp: Date = new Date();

  @Input()
  title: string;

  @Input()
  breadcrumbs: Observable<BreadCrumb[]>;

  constructor(
    private navService: RhombusShellNavService) { }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.dateTimeStamp = new Date();
    });
  }

  toggleNav() {
    this.navService.toggle();
  }

}
