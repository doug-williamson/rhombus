import { Inject, Injectable, Optional } from '@angular/core';
import { RHOMBUS_SHELL_APPLICATION_INFORMATION, RhombusShellApplicationInformation, FirebaseOptions } from '../models/shell-app-info';

@Injectable({
  providedIn: 'root',
})
export class RhombusShellApplicationInfoService {

  constructor(
    @Optional() @Inject(RHOMBUS_SHELL_APPLICATION_INFORMATION) private info?: RhombusShellApplicationInformation,
  ) { }

  get logoLetters(): string {
    return this.info && this.info.logoLetters;
  }

  get logoUrl(): string {
    return this.info && this.info.logoUrl;
  }

  get firebaseConfig(): FirebaseOptions {
    return this.info && this.info.firebaseConfig;
  }
}
