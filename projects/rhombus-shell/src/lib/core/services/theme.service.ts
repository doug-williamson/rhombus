import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { OverlayContainer } from '@angular/cdk/overlay';

const LOCAL_STORAGE_THEME_MODE_KEY = 'RhombusShellThemeMode';

@Injectable({
  providedIn: 'root'
})
export class RhombusShellThemeService {

  private _darkTheme = new Subject<boolean>();
  isDarkTheme = this._darkTheme.asObservable();
  
  constructor(private overlayContainer: OverlayContainer) {}

  setDarkTheme(isDarkTheme: boolean) {
    this._darkTheme.next(isDarkTheme);
    this.updateCDKOverlay(this.className);
  }

  get className() {
    return this._darkTheme ? 'rhombus-light-theme' : 'rhombus-dark-theme';
  }

  updateCDKOverlay(className: string) {
    const containerElement = this.overlayContainer.getContainerElement();
    containerElement.classList.add(className);
  }
}
