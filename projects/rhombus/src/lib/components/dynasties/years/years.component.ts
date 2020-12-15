import { animate, state, style, transition, trigger } from '@angular/animations';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, Input, OnInit } from '@angular/core';
import { IDynastyWeek, IDynastyYear } from '../dynasty/dynasty';

@Component({
  selector: 'rh-dynasty-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.scss'],
})
export class RhDynastyYearsComponent implements OnInit {

  weeksComponent: ComponentPortal<any>;

  @Input()
  years: IDynastyYear[] = undefined;

  @Input()
  weeks: IDynastyWeek[] = undefined;

  _selectedYear: IDynastyYear = undefined;

  constructor() {}

  ngOnInit(): void {

  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }

}