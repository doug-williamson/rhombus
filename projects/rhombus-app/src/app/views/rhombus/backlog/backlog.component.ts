import { Component, OnInit } from '@angular/core';
import { IBacklog } from '@dougwilliamson/rhombus';
import { BacklogService } from './backlog.service';

@Component({
  selector: 'rh-app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {

    backlog: IBacklog[];

    constructor(private backlogService: BacklogService) {}

    ngOnInit() {
      this.backlogService.getBacklog$().subscribe(res => {
        this.backlog = res;
      });
    }

}
