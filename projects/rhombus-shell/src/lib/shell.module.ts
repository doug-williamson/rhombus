import { ModuleWithProviders, NgModule } from '@angular/core';
import { RhombusShellConfigurationModule } from './configuration/configuration.module';
import { RhombusShellCoreModule } from './core/core.module';
import { RHOMBUS_SHELL_APPLICATION_INFORMATION, RhombusShellApplicationInformation } from './core/models/shell-app-info';

export interface RhombusShellConfiguration {
  applicationInfo: RhombusShellApplicationInformation;
}

@NgModule({
  exports: [
    RhombusShellCoreModule,
    RhombusShellConfigurationModule,
  ],
})
export class RhombusShellModule {
  static forRoot(config: RhombusShellConfiguration): ModuleWithProviders {
    return {
      ngModule: RhombusShellRootModule,
      providers: [
        {
          provide: RHOMBUS_SHELL_APPLICATION_INFORMATION,
          useValue: config.applicationInfo,
        },
      ],
    };
  }
 }

@NgModule({
  imports: [
    RhombusShellCoreModule.forRoot(),
  ],
  exports: [
    RhombusShellModule,
  ],
})
export class RhombusShellRootModule {}
