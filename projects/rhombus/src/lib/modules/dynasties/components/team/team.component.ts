import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IDynastyYear } from '@dougwilliamson/rhombus';

@Component({
  selector: 'rh-dynasty-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class RhDynastyTeamComponent implements OnInit {

    @Input()
    positionId: number = undefined;

    constructor() { }

    ngOnInit(): void {

    }

}
