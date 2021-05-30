import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RhAuthService {

    constructor(private angularFireAuth: AngularFireAuth, private angularFirestore: AngularFirestore, private router: Router) {
        this.user$ = this.angularFireAuth.authState.pipe(
          switchMap(user => {
            if (user) {
              // console.log(user);
              return this.angularFirestore.doc<User>(`users/${user.uid}`).valueChanges();
            } else {
              return of(null);
            }
          }),
        );
    }

    user$: Observable<User>;

    isAuthenticated() {
        return (localStorage.getItem('guest') === 'true' || localStorage.getItem('user') === 'true');
    }

    // Auth logic to run auth providers
    async login() {
        const provider = new auth.GoogleAuthProvider();
        const credential = await this.angularFireAuth.signInWithPopup(provider);
        this.updateUserData(credential.user);
        localStorage.setItem('user', 'true');
        this.router.navigateByUrl('');
    }

    async anonymousLogin() {
        localStorage.setItem('guest', 'true');
        this.router.navigateByUrl('');
    }

    async signOut() {
        return this.angularFireAuth.signOut().then(() => {
          localStorage.setItem('user', null);
          localStorage.setItem('guest', null);
          this.router.navigateByUrl('login');
        });
    }

    isOwner(user: User): boolean {
        const allowed = ['owner'];
        return this.checkAuthorization(user, allowed);
      }

    isSubscriber(user: User): boolean {
        const allowed = ['subscriber'];
        return this.checkAuthorization(user, allowed);
    }

      // determines if user has matching role
    private checkAuthorization(user: User, allowedRoles: string[]): boolean {
        if (!user) { return false; }

        for (const role of allowedRoles) {
          if (user.roles[role]) {
            return true;
          }
        }
        return false;
    }

    private updateUserData(user: firebase.User) {
        const userRef: AngularFirestoreDocument<User> = this.angularFirestore.doc(`users/${user.uid}`);

        const data = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          roles: {
            subscriber: true,
          },
        };

        return userRef.set(data, { merge: true});
    }
}
