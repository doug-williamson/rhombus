import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RhShellNavService } from '../../services/nav.service';
import { BreadCrumb } from '../wrapper/breadcrumb';

@Component({
  selector: 'rh-shell-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class RhShellHeaderComponent implements OnInit {

    timer;
    dateTimeStamp: Date = new Date();
    title: string;

    @Input()
    breadcrumbs: Observable<BreadCrumb[]>;

    constructor(
        private navService: RhShellNavService,
        private titleService: Title,
        private router: Router) {
            this.router.events.subscribe(event => {
                if (event instanceof NavigationEnd) {

                    this.title = this.getTitle(router.routerState, router.routerState.root).join('-');
                    this.titleService.setTitle(this.title);
                }
            });
    }

    ngOnInit() {
        this.timer = setInterval(() => {
            this.dateTimeStamp = new Date();
        });
    }

    toggleNav() {
        this.navService.toggle();
    }

    // collect that title data properties from all child routes
    // there might be a better way but this worked for me
    getTitle(state, parent) {
        const data = [];
        if (parent && parent.snapshot.data && parent.snapshot.data.title) {
            data.push(parent.snapshot.data.title);
        }

        if (state && parent) {
            data.push(...this.getTitle(state, state.firstChild(parent)));
        }
        return data;
    }

}
