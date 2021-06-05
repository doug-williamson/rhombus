import { InjectionToken } from '@angular/core';

export const RH_SHELL_APPLICATION_INFORMATION =
  new InjectionToken<RhShellApplicationInformation>('RH_SHELL_APPLICATION_INFORMATION');

export declare interface FirebaseOptions {
    [key: string]: any;
}

export interface RhShellApplicationInformation {
    logoLetters?: string;
    logoUrl?: string;
    firebaseConfig?: FirebaseOptions;
}
