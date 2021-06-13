import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { RhAuthService, User } from '@dougwilliamson/rhombus';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { RhShellThemeService } from '../../services/theme.service';

@Component({
  selector: 'rh-shell-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class RhShellAuthComponent implements OnInit {

    _themeClassName$: Observable<string>;
    user$: Observable<User>;
    compact$: Observable<boolean>;

    constructor(private media: MediaObserver, private authService: RhAuthService, private themeService: RhShellThemeService) {
        this.compact$ = this.media.asObservable().pipe(
            map(mediaMatch => {
                return !mediaMatch.find(change => change.mqAlias === 'gt-xs');
            }),
        );

        this._themeClassName$ = this.themeService.currentTheme$.pipe(
            map(theme => theme ? theme.className : ''),
        );
    }

    ngOnInit(): void {
        this.user$ = this.authService.user$;
    }

    signOut(): void {
        this.authService.signOut();
    }

    toggleDarkMode() {
        this.themeService.toggleDarkMode();
    }
}
