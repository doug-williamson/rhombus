import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { ILatestNews } from '@dougwilliamson/rhombus';
import { LatestNewsService } from './latest-news.service';

@Component({
  selector: 'rh-app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss'],
})
export class LatestNewsComponent implements OnInit {

  displayColumns: string[] = ['timestamp', 'title'];
  expandedLatestNews: ILatestNews | null;

  latestNews: ILatestNews[];

  constructor(public media: MediaObserver, private latestNewsService: LatestNewsService) {}

  ngOnInit() {
    this.latestNewsService.getLatestNews$().subscribe(res => {
        console.log(res);
        this.latestNews = res;
    });
  }

}
