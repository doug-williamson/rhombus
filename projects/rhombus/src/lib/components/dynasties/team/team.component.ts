import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IDynastyYear } from '../dynasty/dynasty';

@Component({
  selector: 'rh-dynasty-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class RhDynastyTeamComponent implements OnInit {

    @Input()
    year: IDynastyYear = undefined;

    constructor() { }

    ngOnInit(): void {
        console.log(this.year);
    }

}
