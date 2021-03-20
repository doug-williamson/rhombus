import { Component, Input, OnInit } from '@angular/core';
import { IDynastyWeek, IDynastyYear } from '@dougwilliamson/rhombus';
import { YearService } from './year.service';

@Component({
  selector: 'rh-dynasty-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.scss'],
})
export class RhDynastyYearComponent implements OnInit {

  @Input()
  year: IDynastyYear;

  weeks: IDynastyWeek[];

  constructor(private yearService: YearService) { }

  ngOnInit(): void {
    this.yearService.getIDynastyWeeks$(this.year.id).subscribe(res => {
      this.weeks = res;
    });
  }

}
