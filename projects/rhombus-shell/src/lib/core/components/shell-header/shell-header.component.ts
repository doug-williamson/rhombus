import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { RhombusShellNavService } from '../../services/nav.service';
import { RhombusShellThemeService } from '../../services/theme.service';
import { RhombusShellAboutComponent } from '../shell-about/shell-about.component';

@Component({
  selector: 'rhombus-shell-header',
  templateUrl: './shell-header.component.html',
  styleUrls: ['./shell-header.component.scss'],
})
export class RhombusShellHeaderComponent implements OnInit {

  isDarkTheme: Observable<boolean>;

  @Input()
  title: string;

  constructor(
    private navService: RhombusShellNavService,
    private dialog: MatDialog,
    private themeService: RhombusShellThemeService) { }

  ngOnInit() {
    this.isDarkTheme = this.themeService.darkThemeSubject.asObservable();
  }

  toggleNav() {
    this.navService.toggle();
  }

  showAbout(): void {
    const dialogRef = this.dialog.open(RhombusShellAboutComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}
