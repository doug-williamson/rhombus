import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RhShellNavCollection } from '../../models/shell-nav-item';

@Component({
  selector: 'rh-shell-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class RhShellNavComponent implements OnInit {

    @Input()
    title: string;

    @Input()
    navCollection: RhShellNavCollection[];

    constructor(
    private router: Router) { }

    ngOnInit() {
        this.router.events.subscribe(() => {
            // close sidenav on routing
            //   if (this.media.isActive('xs')) {
            //     this.navService.close();
            //   }
        });
    }

}
