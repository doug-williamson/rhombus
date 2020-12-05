import { Component, Input, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { IBacklog } from './backlog';

@Component({
  selector: 'rh-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {

    displayedColumns: string[] = ['status', 'text'];

    @Input()
    backlog: IBacklog[];
  
    constructor(public media: MediaObserver) {}
  
    ngOnInit() {}

}
