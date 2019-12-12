import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RhombusShellNavService {

  showSidenav$ = new BehaviorSubject<boolean>(true);
  _isOpened = true;

  constructor() { }

  toggle() {
    this._isOpened = !this._isOpened;
    this.showSidenav$.next(this._isOpened);
  }


}
