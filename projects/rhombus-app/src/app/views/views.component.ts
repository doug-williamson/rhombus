import { Component, OnInit } from '@angular/core';
import { RhombusShellNavCollection, RhombusShellThemeService } from '@dougwilliamson/rhombus-shell';
import { Observable } from 'rxjs';

@Component({
  selector: 'rhombus-app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss'],
})
export class ViewsComponent implements OnInit {

    _darkMode$: Observable<boolean>;
    title = 'Rhombus';

    navCollection: RhombusShellNavCollection[] = [
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
                    // children: [
                    //   {
                    //     name: 'Wrapper',
                    //     route: 'rhombus-shell/wrapper',
                    //   },
                    //   {
                    //     name: 'Header',
                    //     route: 'rhombus-shell/header',
                    //   },
                    //   {
                    //     name: 'Sidenav',
                    //     route: 'rhombus-shell/sidenav',
                    //   },
                    //   {
                    //     name: 'Modals',
                    //     route: 'rhombus-shell/modals',
                    //   },
                    // ]
                },
            ],
        },
    ];

    constructor(private themeService: RhombusShellThemeService) {
        this._darkMode$ = this.themeService.darkMode$;
    }

    ngOnInit() {}

}
