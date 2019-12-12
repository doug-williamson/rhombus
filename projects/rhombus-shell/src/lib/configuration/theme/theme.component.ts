import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RhombusShellRootConfigurationComponent } from '../_models/root-configuration';

@Component({
  selector: 'rhombus-shell-theme',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RhombusShellThemeComponent implements OnChanges {

  @Input()
  name: string;

  @Input()
  className: string;

  constructor(private rootConfig: RhombusShellRootConfigurationComponent) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.name || changes.className) {
      this.rootConfig.refresh();
    }
  }

}
