import { ModuleWithProviders, NgModule } from '@angular/core';
import { RhShellCoreModule } from './core/core.module';
import { RhShellApplicationInformation, RH_SHELL_APPLICATION_INFORMATION } from './core/models/shell-app-info';

export interface RhShellConfiguration {
  applicationInfo: RhShellApplicationInformation;
}

@NgModule({
  exports: [
    RhShellCoreModule,
  ],
})
export class RhShellModule {
  static forRoot(config: RhShellConfiguration): ModuleWithProviders<RhShellRootModule> {
    return {
      ngModule: RhShellRootModule,
      providers: [
        {
          provide: RH_SHELL_APPLICATION_INFORMATION,
          useValue: config.applicationInfo,
        },
      ],
    };
  }
}

@NgModule({
  imports: [
    RhShellCoreModule.forRoot(),
  ],
  exports: [
    RhShellModule,
  ],
})
export class RhShellRootModule {}
