import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RhombusShellThemeService } from '../../public_api';

@Component({
  selector: 'rhombus-shell-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class RhombusShellSettingsComponent implements OnInit {

  isDarkTheme: Observable<boolean>;

  constructor(private themeService: RhombusShellThemeService) { }

  ngOnInit() {
    this.isDarkTheme = this.themeService.darkThemeSubject.asObservable();
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

}
