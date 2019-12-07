import { NgModule, ModuleWithProviders } from '@angular/core';
import { RhombusShellCoreModule } from './core/shell-core.module';
import { RhombusShellApplicationInformation, RHOMBUS_SHELL_APPLICATION_INFORMATION } from './core/models/shell-app-info';

export interface RhombusShellConfiguration {
  applicationInfo: RhombusShellApplicationInformation;
}

@NgModule({
  exports: [
    RhombusShellCoreModule,
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
