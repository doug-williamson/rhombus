import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { DynastiesService } from './dynasties.service';
import { IDynasty } from './dynasty/dynasty';

@Component({
  selector: 'rh-dynasties',
  templateUrl: './dynasties.component.html',
  styleUrls: ['./dynasties.component.scss'],
})
export class RhDynastiesComponent implements OnInit {

    dynasties: IDynasty[];
    _selectedDynasty: IDynasty = undefined;

    constructor(public media: MediaObserver, private dynastiesService: DynastiesService) {}

    ngOnInit() {
        this.dynastiesService.getDynasties$().subscribe(res => {
            this.dynasties = res;

            // change to collection for multi-dynasty collection
            this._selectedDynasty = this.dynasties[0];
        });
    }

}
