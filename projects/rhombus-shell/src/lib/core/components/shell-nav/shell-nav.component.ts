import { Component, Input, OnInit } from '@angular/core';
import { RhombusShellNavItem } from '../../models/shell-nav-item';
import { RhombusShellNavService } from '../../services/nav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'rhombus-shell-nav',
  templateUrl: './shell-nav.component.html',
  styleUrls: ['./shell-nav.component.scss'],
})
export class RhombusShellNavComponent implements OnInit {

  @Input()
  navItems: RhombusShellNavItem[];

  constructor(private router: Router, private sidenavService: RhombusShellNavService) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      // close sidenav on routing
      this.sidenavService.close();
    });
  }

}
