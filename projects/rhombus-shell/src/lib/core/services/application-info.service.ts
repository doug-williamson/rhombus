import { Injectable, Optional, Inject } from '@angular/core';
import { RHOMBUS_SHELL_APPLICATION_INFORMATION, RhombusShellApplicationInformation } from '../models/shell-app-info';

@Injectable({
  providedIn: 'root'
})
export class RhombusShellApplicationInfoService {

  constructor(
    @Optional() @Inject(RHOMBUS_SHELL_APPLICATION_INFORMATION) private info?: RhombusShellApplicationInformation,
  ) { }

  get name(): string {
    return this.info && this.info.name;
  }

  get version(): string {
    return this.info && this.info.version;
  }

  get logoLetters(): string {
    return this.info && this.info.logoLetters;
  }

  get logoUrl(): string {
    return this.info && this.info.logoUrl;
  }

  get twitterUrl(): string {
    return this.info && this.info.twitterUrl;
  }
}
