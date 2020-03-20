import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RhombusShellNavService {

  showSidenav$ = new BehaviorSubject<boolean>(false);
  _isOpened = true;

  constructor() { }

  setState(isOpened: boolean) {
    this._isOpened = isOpened;
    this.showSidenav$.next(isOpened);
  }

  toggle() {
    this._isOpened = !this._isOpened;
    this.showSidenav$.next(this._isOpened);
  }

  close() {
    this._isOpened = false;
    this.showSidenav$.next(false);
  }

}
