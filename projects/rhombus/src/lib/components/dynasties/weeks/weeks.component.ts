import { Component, Input, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { IDynastyWeek } from '../dynasty/dynasty';

@Component({
  selector: 'rh-dynasty-weeks',
  templateUrl: './weeks.component.html',
  styleUrls: ['./weeks.component.scss'],
})
export class RhDynastyWeeksComponent implements OnInit {

    @Input()
    weeks: IDynastyWeek[] = undefined;

    constructor(public media: MediaObserver) { }

    ngOnInit(): void {
    }

}
