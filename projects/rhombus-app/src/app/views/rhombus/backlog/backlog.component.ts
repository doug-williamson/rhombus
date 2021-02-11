import { Component, OnInit } from '@angular/core';
import { RhShellAuthService } from 'projects/rhombus-shell/src/lib/core/services/auth.service';

@Component({
  selector: 'rh-app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {

  canEdit: boolean;

  constructor(private authService: RhShellAuthService) { }

  ngOnInit() {
    this.authService.user$.subscribe(res => {
      this.canEdit = this.authService.canEdit(res);
    });
  }

}
