import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RhombusShellTheme } from '../../core/models/theme';
import { RhombusShellRootConfigurationComponent } from '../_models/root-configuration';

@Component({
  selector: 'rh-shell-theme',
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

  toModel(): RhombusShellTheme | undefined {
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
