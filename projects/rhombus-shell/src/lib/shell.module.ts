import { NgModule, ModuleWithProviders } from '@angular/core';
import { RhombusShellCoreModule } from './core/core.module';
import { RhombusShellApplicationInformation, RHOMBUS_SHELL_APPLICATION_INFORMATION } from './core/models/shell-app-info';
import { RhombusShellConfigurationModule } from './configuration/configuration.module';

export interface RhombusShellConfiguration {
  applicationInfo: RhombusShellApplicationInformation;
}

@NgModule({
  exports: [
    RhombusShellCoreModule,
    RhombusShellConfigurationModule,
  ]
})
export class RhombusShellModule {
  static forRoot(config: RhombusShellConfiguration): ModuleWithProviders {
    return {
      ngModule: RhombusShellRootModule,
      providers: [
        {
          provide: RHOMBUS_SHELL_APPLICATION_INFORMATION,
          useValue: config.applicationInfo,
        }
      ]
    }
  };
 }

@NgModule({
  imports: [
    RhombusShellCoreModule.forRoot(),
  ],
  exports: [
    RhombusShellModule
  ]
})
export class RhombusShellRootModule {}
