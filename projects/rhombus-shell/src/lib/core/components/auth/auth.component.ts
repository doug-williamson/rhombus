import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatDialog } from '@angular/material/dialog';
import { RhAuthService } from '@dougwilliamson/rhombus';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { RhombusShellThemeService } from '../../services/theme.service';

@Component({
  selector: 'rh-shell-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class RhombusShellAuthComponent implements OnInit {

  displayName!: User;
  compact$: Observable<boolean>;

  // tslint:disable-next-line:max-line-length
  constructor(private media: MediaObserver, private dialog: MatDialog, public authService: RhAuthService, private themeService: RhombusShellThemeService) {
    this.compact$ = this.media.asObservable().pipe(
      map(mediaMatch => {
        return !mediaMatch.find(change => change.mqAlias === 'gt-xs');
      }),
    );
   }

  ngOnInit(): void {
  }

  signOut(): void {
    this.authService.signOut();
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }
}
