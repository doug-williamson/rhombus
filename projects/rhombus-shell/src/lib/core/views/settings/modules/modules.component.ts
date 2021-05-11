import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IModule } from './module';
import { RhShellModulesService } from './modules.service';

@Component({
  selector: 'rh-shell-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RhShellModulesComponent implements OnInit {

  modules$: Observable<IModule[]>;

  constructor(private modulesService: RhShellModulesService) { }

  ngOnInit(): void {
    this.modules$ = this.modulesService.getModules$();

    this.modulesService.getModules$();
  }

  onSelection(e, v){
    console.log(e.option.value, e.option.selected);

  }

}
