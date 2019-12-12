import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RhombusShellTheme } from '../models/theme';

const LOCAL_STORAGE_THEME_MODE_KEY = 'RhombusShellThemeMode';

@Injectable({
  providedIn: 'root',
})
export class RhombusShellThemeService {

  private _darkTheme: boolean;
  public darkThemeSubject = new BehaviorSubject<boolean>(false);
  private _currentThemeSubject = new BehaviorSubject<RhombusShellTheme | undefined>(undefined);
  private _availableThemesSubject = new BehaviorSubject<RhombusShellTheme[]>([]);

  get currentTheme$() {
    return this._currentThemeSubject.asObservable();
  }

  get availableThemes$() {
    return this._availableThemesSubject.asObservable();
  }

  constructor(private overlayContainer: OverlayContainer) {
    this.setInitialTheme();

    this.darkThemeSubject.subscribe(results => {
      this._darkTheme = results;
    });
  }

  // updateTheme(theme: RhombusShellTheme) {
  //   this.updateCDKOverlay(theme.className);
  //   localStorage.setItem(LOCAL_STORAGE_THEME_MODE_KEY, theme.className);
  //   this._currentThemeSubject.next(theme);
  // }

  setDarkTheme(isDarkTheme: boolean) {
    this.darkThemeSubject.next(isDarkTheme);
    this.updateCDKOverlay();
    localStorage.setItem(LOCAL_STORAGE_THEME_MODE_KEY, this.className);
  }

  get className() {
    return  !this._darkTheme ? 'rhombus-light-theme' : 'rhombus-dark-theme';
  }

  set className(val: string) {
    this._darkTheme = (val === 'rhombus-light-theme') ? false : true;
  }

  private updateCDKOverlay() {
    const containerElement = this.overlayContainer.getContainerElement();
    // const currentTheme = this._currentThemeSubject.value;

    // if (currentTheme && currentTheme.className) {
    //   containerElement.classList.remove(currentTheme.className);
    // }
    if (this._darkTheme) {
      containerElement.classList.remove('rhombus-light-theme');
      containerElement.classList.add('rhombus-dark-theme');
    } else {
      containerElement.classList.remove('rhombus-dark-theme');
      containerElement.classList.add('rhombus-light-theme');
    }

  }

  private setInitialTheme() {
    // const availableThemes = this._availableThemesSubject.value;
    // if (availableThemes.length > 0) {
    //   let theme = availableThemes[0];
    //   const savedThemeClassName = localStorage.getItem(LOCAL_STORAGE_THEME_MODE_KEY);

    //   const savedTheme = availableThemes.find(a => a.className === savedThemeClassName);

    //   if (savedTheme) {
    //     theme = savedTheme;
    //   }

    //   this.updateTheme(theme);
    // }

    this.className = localStorage.getItem(LOCAL_STORAGE_THEME_MODE_KEY);
    this.setDarkTheme(this._darkTheme);
    this.updateCDKOverlay();
  }
}
