import { Component, Input, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { RhombusShellNavItem } from '../../models/shell-nav-item';
import { RhombusShellNavService } from '../../services/nav.service';

@Component({
  selector: 'rhombus-shell-nav',
  templateUrl: './shell-nav.component.html',
  styleUrls: ['./shell-nav.component.scss'],
})
export class RhombusShellNavComponent implements OnInit {

  @Input()
  navItems: RhombusShellNavItem[];

  constructor(private router: Router, private navService: RhombusShellNavService, private media: MediaObserver) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      // close sidenav on routing
      if (this.media.isActive('xs')) {
        this.navService.close();
      }
    });
  }

}
