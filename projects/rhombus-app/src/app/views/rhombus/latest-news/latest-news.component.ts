import { Component, OnInit } from '@angular/core';
import { RhAuthService } from 'projects/rhombus/src/lib/services/auth.service';

@Component({
  selector: 'rh-app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss'],
})
export class LatestNewsComponent implements OnInit {

  canEdit: boolean;

  constructor(private authService: RhAuthService) { }

  ngOnInit() {
    this.authService.user$.subscribe(res => {
      this.canEdit = this.authService.canEdit(res);
    });
  }

}
