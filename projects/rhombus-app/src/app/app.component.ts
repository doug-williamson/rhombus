import { Component, OnInit } from '@angular/core';
import { RhombusShellNavEntry, RhombusShellThemeService } from 'projects/rhombus-shell';
import { Observable } from 'rxjs';

@Component({
  selector: 'rh-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class RhombusAppComponent implements OnInit {

    _darkMode$: Observable<boolean>;
    title = 'Rhombus';

    navEntries: RhombusShellNavEntry[] = [
        {
            name: 'Getting Started',
            children: [
                {
                    name: 'Home',
                    route: 'getting-started/home',
                },
                {
                    name: 'Rhombus',
                    route: 'getting-started/rhombus',
                },
                {
                    name: 'Rhombus Shell',
                    route: 'getting-started/rhombus-shell',
                },
            ],
        },
        {
            name: 'Rhombus',
            children: [
                {
                    name: 'Components',
                    route: 'rhombus/components',
                },
            ],
        },
        {
            name: 'Rhombus Shell',
            children: [
                {
                    name: 'Core',
                    route: 'rhombus-shell/core',
                },
            ],
        },
    ];

    constructor(private themeService: RhombusShellThemeService) {
        this._darkMode$ = this.themeService.darkMode$;
    }

    ngOnInit() {}
}
