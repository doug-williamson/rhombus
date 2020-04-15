import { InjectionToken } from '@angular/core';

export const RHOMBUS_SHELL_APPLICATION_INFORMATION =
  new InjectionToken<RhombusShellApplicationInformation>('RHOMBUS_SHELL_APPLICATION_INFORMATION');

export declare interface FirebaseOptions {
    [key: string]: any;
}

export interface RhombusShellApplicationInformation {
    name: string;
    version: string;
    logoLetters?: string;
    logoUrl?: string;
    twitterUrl?: string;
    changelogUrl?: string;
    donateUrl?: string;
    contactUsLink?: string;
    firebaseConfig?: FirebaseOptions;
}
