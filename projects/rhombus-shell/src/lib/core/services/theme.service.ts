import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RhombusShellTheme } from '../models/theme';

const LOCAL_STORAGE_THEME_MODE_KEY = 'RhombusShellThemeMode';
const LOCAL_STORAGE_DARK_MODE_KEY = 'RhombusShellDarkMode';

@Injectable({
  providedIn: 'root',
})
export class RhombusShellThemeService {

  private _darkModeSubject = new BehaviorSubject<boolean>(false);
  private _currentThemeSubject = new BehaviorSubject<RhombusShellTheme | undefined>(undefined);
  private _availableThemesSubject = new BehaviorSubject<RhombusShellTheme[]>([]);

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
  // updateTheme(theme: RhombusShellTheme) {
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

  // updateAvailableThemes(themes: RhombusShellTheme[]) {
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
    console.log(containerElement);
  }

  // private updateCDKOverlay(themeClassName: string) {
  //   const containerElement = this.overlayContainer.getContainerElement();
  //   const currentTheme = this._currentThemeSubject.value;
  //   if (currentTheme && currentTheme.className) {
  //     containerElement.classList.remove(currentTheme.className);
  //   }
  //   containerElement.classList.add(themeClassName);
  // }
}
