import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RhombusShellNavService {

  showSidenav$ = new BehaviorSubject<boolean>(false);
  _isOpened = false;

  constructor() { }

  setState(isOpened: boolean) {
    this._isOpened = isOpened;
    this.showSidenav$.next(isOpened);
  }

  toggle() {
    console.log(this._isOpened);
    this._isOpened = !this._isOpened;
    this.showSidenav$.next(this._isOpened);
  }

  close() {
    this._isOpened = false;
    this.showSidenav$.next(false);
  }

}
