import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class RhShellAuthService {

    userData: any;

    constructor(private authService: AngularFireAuth) {
        this.authService.authState.subscribe(user => {
            if (user) {
              this.userData = user;
              localStorage.setItem('user', JSON.stringify(this.userData));
              JSON.parse(localStorage.getItem('user'));
            } else {
              localStorage.setItem('user', null);
              JSON.parse(localStorage.getItem('user'));
            }
          });
     }

    // Auth logic to run auth providers
    login() {
        return this.authService.signInWithPopup(new auth.GoogleAuthProvider())
            .then((result) => {
                this.userData = result.user;
                localStorage.setItem('user', JSON.stringify(result.user));
                JSON.parse(localStorage.getItem('user'));
            }).catch((error) => {
                console.log(error);
        });
    }

    signOut() {
        return this.authService.signOut().then(() => {
            localStorage.setItem('user', null);
            this.userData = undefined;
        });
    }
}
