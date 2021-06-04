import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { RhAuthService } from '@dougwilliamson/rhombus';

@Injectable({
    providedIn: 'root',
})
export class RhAuthGuardService implements CanActivate, CanActivateChild {
  constructor(public authService: RhAuthService, public router: Router) {}

  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return this.authService.isAuthenticated();
  }

  canActivateChild(): boolean {
    return this.canActivate();
  }
}
