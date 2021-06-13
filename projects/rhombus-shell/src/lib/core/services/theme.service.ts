import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RhShellTheme } from '../models/theme';

const LOCAL_STORAGE_THEME_MODE_KEY = 'RhShellThemeMode';
const LOCAL_STORAGE_DARK_MODE_KEY = 'RhShellDarkMode';

@Injectable({
  providedIn: 'root',
})
export class RhShellThemeService {

  private _darkModeSubject = new BehaviorSubject<boolean | undefined>(false);
  private _currentThemeSubject = new BehaviorSubject<RhShellTheme | undefined>(undefined);
  private _availableThemesSubject = new BehaviorSubject<RhShellTheme[]>([]);

  /**
   * Available themes to consume
   */
  get availableThemes$() {
    return this._availableThemesSubject.asObservable();
  }

  /**
   * Currently selected theme
   */
  get currentTheme$() {
    return this._currentThemeSubject.asObservable();
  }

  get darkMode$() {
    return this._darkModeSubject.asObservable();
  }

  constructor(private overlayContainer: OverlayContainer) {
    // this.setInitialTheme();
    this.setInitialDarkMode();
  }

  /**
   * Update the applications CSS theme applied to the root element
   */
  // updateTheme(theme: RhShellTheme) {
  //   const themeClassName = theme.className;
  //   this.updateCDKOverlay(themeClassName);
  //   localStorage.setItem(LOCAL_STORAGE_THEME_MODE_KEY, themeClassName);
  //   this._currentThemeSubject.next(theme);
  // }

  updateDarkMode(value: boolean) {
    this.updateCDKOverlay(value);
    localStorage.setItem(LOCAL_STORAGE_DARK_MODE_KEY, value.toString());
    this._darkModeSubject.next(value);
  }

  toggleDarkMode() {
    this.updateDarkMode(!this._darkModeSubject.value);
  }

  // updateAvailableThemes(themes: RhShellTheme[]) {
  //   this._availableThemesSubject.next(themes);
  //   this.setInitialTheme();
  // }

  setInitialDarkMode() {
    let _darkMode = false;
    const _darkModeValue = localStorage.getItem(LOCAL_STORAGE_DARK_MODE_KEY);

    if (_darkModeValue) {
      _darkMode = (_darkModeValue === 'true') ? true : false;
    } else {
      localStorage.setItem(LOCAL_STORAGE_DARK_MODE_KEY, _darkMode.toString());
    }

    this.updateDarkMode(_darkMode);
  }

  // private setInitialTheme() {
  //   const availableThemes = this._availableThemesSubject.value;
  //   if (availableThemes.length > 0) {
  //     // Pick the first theme as the default theme
  //     let theme = availableThemes[0];
  //     const savedThemeClassName = localStorage.getItem(LOCAL_STORAGE_THEME_MODE_KEY);

  //     const savedTheme = availableThemes
  //       .find(t => t.className === savedThemeClassName);

  //     if (savedTheme) {
  //       theme = savedTheme;
  //     } else {
  //       localStorage.setItem(LOCAL_STORAGE_THEME_MODE_KEY, savedThemeClassName);
  //     }

  //     this.updateTheme(theme);
  //   }
  // }

  /**
   * Updates the CDK overlay class so dialogs and dropdowns are properly themed
   */
  private updateCDKOverlay(value: boolean) {
    const containerElement = this.overlayContainer.getContainerElement();
    if (value) {
      containerElement.classList.add('rhombus-dark-theme');
    } else {
      containerElement.classList.remove('rhombus-dark-theme');
    }
  }
}
