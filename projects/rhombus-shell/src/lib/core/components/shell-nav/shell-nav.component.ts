import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { RhombusShellNavCollection, RhombusShellNavEntry } from '../../models/shell-nav-item';
import { RhShellModulesService } from '../../views/settings/modules/modules.service';

@Component({
  selector: 'rh-shell-nav',
  templateUrl: './shell-nav.component.html',
  styleUrls: ['./shell-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class RhombusShellNavComponent implements OnInit {

  navCollection: RhombusShellNavCollection[] = [];

  constructor(private modulesService: RhShellModulesService) { }

  ngOnInit() {
    this.modulesService.getModules$().subscribe(res => {
      this.navCollection = [];
      const moduleCollection: RhombusShellNavEntry[] = [];

      res.forEach((module) => {
        switch (module.moduleId) {
          case 1: {
            if (module.enabled) {
              moduleCollection.push({
                name: 'Backlog',
                route: 'backlog',
              });
            }
            break;
          }
          case 2: {
            if (module.enabled) {
              moduleCollection.push({
                name: 'Blog',
                route: 'blog',
              });
            }
            break;
          }
          case 3: {
            if (module.enabled) {
              moduleCollection.push({
                name: 'Dynasties',
                route: 'dynasties',
              });
            }
            break;
          }
          case 4: {
            if (module.enabled) {
              moduleCollection.push({
                name: 'Latest News',
                route: 'latest-news',
              });
            }
            break;
          }
        }
      });

      this.navCollection.push({
        label: 'Modules',
        navEntries: moduleCollection,
      });

      console.log(this.navCollection);
    });
  }
}
