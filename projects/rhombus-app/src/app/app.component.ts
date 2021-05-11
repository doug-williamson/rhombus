import { Component, OnInit } from '@angular/core';
import { RhombusShellNavEntry, RhombusShellThemeService } from 'projects/rhombus-shell';
import { Observable } from 'rxjs';

@Component({
  selector: 'rh-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class RhombusAppComponent implements OnInit {

  _darkMode$: Observable<boolean>;
  title = 'Rhombus';

  constructor(private themeService: RhombusShellThemeService) {
    this._darkMode$ = this.themeService.darkMode$;
  }

  ngOnInit() {

  }
}
