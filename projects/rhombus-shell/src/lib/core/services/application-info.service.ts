import { Inject, Injectable, Optional } from '@angular/core';
import { FirebaseOptions, RhShellApplicationInformation, RH_SHELL_APPLICATION_INFORMATION } from '../models/shell-app-info';

@Injectable({
  providedIn: 'root',
})
export class RhShellApplicationInfoService {

  constructor(
    @Optional() @Inject(RH_SHELL_APPLICATION_INFORMATION) private info?: RhShellApplicationInformation,
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

  get firebaseMetadataId(): string {
      return this.info && this.info.firebaseMetadataId;
  }
}
