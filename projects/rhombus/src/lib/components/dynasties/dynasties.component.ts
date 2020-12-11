import { Component, Input, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { DynastiesService } from './dynasties.service';
import { IDynasty } from './dynasty/dynasty';

@Component({
  selector: 'rh-dynasties',
  templateUrl: './dynasties.component.html',
  styleUrls: ['./dynasties.component.scss'],
})
export class RhDynastiesComponent implements OnInit {

    @Input()
    dynasties: IDynasty[];
    
    _selectedDynasty: IDynasty = undefined;

    constructor(public media: MediaObserver) {}

    ngOnInit() {

    }

}
