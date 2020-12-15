import { Component, OnInit } from '@angular/core';
import { IDynastyWeek, IDynastyYear } from '@dougwilliamson/rhombus';
import { RhAppDynastiesService } from './dynasties.service';

@Component({
  selector: 'rh-app-dynasties',
  templateUrl: './dynasties.component.html',
  styleUrls: ['./dynasties.component.scss']
})
export class RhAppDynastiesComponent implements OnInit {

    years: IDynastyYear[] = undefined;
    weeks: IDynastyWeek[] = undefined;

    constructor(private dynastiesService: RhAppDynastiesService) { }

    ngOnInit(): void {
        this.dynastiesService.getDynastyMarkYears$().subscribe(res => {
            this.years = res;
        });

        this.dynastiesService.getIDynastyWeeks$().subscribe(res => {
            this.weeks = res;
        })
    }

}
