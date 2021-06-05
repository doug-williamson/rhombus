import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RhShellTheme } from '../../core/models/theme';
import { RhShellRootConfigurationComponent } from '../_models/root-configuration';

@Component({
  selector: 'rh-shell-theme',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RhShellThemeComponent implements OnChanges {

  @Input()
  name: string;

  @Input()
  className: string;

  constructor(private rootConfig: RhShellRootConfigurationComponent) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.name || changes.className) {
      this.rootConfig.refresh();
    }
  }

  toModel(): RhShellTheme | undefined {
   if (this.isValid) {
    return {
      name: this.name,
      className: this.className,
    };
   } else {
     return undefined;
   }
  }

  private get isValid() {
    return (this.name !== undefined) && (this.className !== undefined);
  }

}
