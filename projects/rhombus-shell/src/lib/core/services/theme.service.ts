import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RhombusShellTheme } from '../models/theme';

const LOCAL_STORAGE_THEME_MODE_KEY = 'RhombusShellThemeMode';

@Injectable({
  providedIn: 'root',
})
export class RhombusShellThemeService {

  public darkThemeSubject = new BehaviorSubject<boolean>(false);
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

  constructor(private overlayContainer: OverlayContainer) {
    this.setInitialTheme();
  }

  /**
   * Update the applications CSS theme applied to the root element
   */
  updateTheme(theme: RhombusShellTheme) {
    const themeClassName = theme.className;
    this.updateCDKOverlay(themeClassName);
    localStorage.setItem(LOCAL_STORAGE_THEME_MODE_KEY, themeClassName);
    this._currentThemeSubject.next(theme);
  }

  updateAvailableThemes(themes: RhombusShellTheme[]) {
    this._availableThemesSubject.next(themes);
    this.setInitialTheme();
  }

  private setInitialTheme() {
    const availableThemes = this._availableThemesSubject.value;
    if (availableThemes.length > 0) {
      // Pick the first theme as the default theme
      let theme = availableThemes[0];
      const savedThemeClassName = localStorage.getItem(LOCAL_STORAGE_THEME_MODE_KEY);

      const savedTheme = availableThemes
        .find(t => t.className === savedThemeClassName);

      if (savedTheme) {
        theme = savedTheme;
      } else {
        localStorage.setItem(LOCAL_STORAGE_THEME_MODE_KEY, savedThemeClassName);
      }

      this.updateTheme(theme);
    }
  }

  /**
   * Updates the CDK overlay class so dialogs and dropdowns are properly themed
   */
  private updateCDKOverlay(themeClassName: string) {
    const containerElement = this.overlayContainer.getContainerElement();
    const currentTheme = this._currentThemeSubject.value;
    if (currentTheme && currentTheme.className) {
      containerElement.classList.remove(currentTheme.className);
    }
    containerElement.classList.add(themeClassName);
  }
}
