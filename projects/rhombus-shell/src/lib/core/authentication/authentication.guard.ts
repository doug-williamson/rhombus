import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class RhombusShellAuthenticationGuard implements CanActivate {
    constructor(
        private router: Router,
    ) {}

    canActivate() {
        // const currentUser = this.userService.;
        // if (currentUser) {
        //     // authorized, so return true
        //     return true;
        // }

        // this.router.navigate(['/login']);
        // return false;
        this.router.navigate(['login']);
        return false;
    }
}
