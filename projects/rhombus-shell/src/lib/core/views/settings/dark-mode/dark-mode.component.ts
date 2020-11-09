import { Component, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { Observable } from 'rxjs';
import { RhombusShellThemeService } from '../../../services/theme.service';



@Component({
  selector: 'rh-shell-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.scss'],
})
export class DarkModeComponent implements OnInit {

  _darkMode: boolean;

  constructor(private themeService: RhombusShellThemeService) { }

  ngOnInit(): void {
    this.themeService.darkMode$.subscribe(results => {
      this._darkMode = results;
    });
  }

  selectionChange(option: MatListOption) {
    this.themeService.updateDarkMode(option.selected);
  }

}
