import { Component, OnInit } from '@angular/core';
import { RhShellNavCollection, RhShellThemeService } from '@dougwilliamson/rhombus-shell';
import { Observable } from 'rxjs';

@Component({
  selector: 'rh-app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss'],
})
export class ViewsComponent implements OnInit {

    _darkMode$: Observable<boolean>;
    title = 'Rhombus';

    navCollection: RhShellNavCollection[] = [
        {
            label: 'Getting Started',
            navEntries: [
                {
                    name: 'Home',
                    route: 'getting-started/home',
                },
                {
                    name: 'Rhombus UI',
                    route: 'getting-started/rhombus',
                },
                {
                    name: 'Rhombus Shell UI',
                    route: 'getting-started/rhombus-shell',
                },
            ],
        },
        {
            label: 'Rhombus UI',
            navEntries: [
              {
                name: 'Components',
                children: [
                  {
                    name: 'Backlog',
                    route: 'rhombus/backlog',
                  },
                  {
                    name: 'Blog',
                    route: 'rhombus/blog',
                  },
                  {
                    name: 'Dynasties',
                    route: 'rhombus/dynasties',
                  },
                  {
                    name: 'Latest News',
                    route: 'rhombus/latest-news',
                  },
                ],
              },
            ],
        },
        {
            label: 'Rhombus Shell UI',
            navEntries: [
                {
                    name: 'Core',
                    route: 'rhombus-shell/core',
                },
            ],
        },
    ];

    constructor(private themeService: RhShellThemeService) {
        this._darkMode$ = this.themeService.darkMode$;
    }

    ngOnInit() {}

}
