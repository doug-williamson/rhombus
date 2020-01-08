import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  user$: Observable<User>;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private angularFirestore: AngularFirestore) {
    this.user$ = this.angularFireAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.angularFirestore.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      }),
    );
  }

  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.angularFireAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  // /* Sign up */
  // signUp(email: string, password: string) {
  //   this.angularFireAuth
  //     .auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(res => {
  //       console.log('Successfully signed up!', res);
  //     })
  //     .catch(error => {
  //       console.log('Something is wrong:', error.message);
  //     });
  // }

  // /* Sign in */
  // signIn(email: string, password: string) {
  //   this.angularFireAuth
  //     .auth
  //     .signInWithEmailAndPassword(email, password)
  //     .then(res => {
  //       console.log(res);
  //       console.log('Successfully signed in!');
  //     })
  //     .catch(err => {
  //       console.log('Something is wrong:', err.message);
  //     });
  // }

  /* Sign out */
  async signOut() {
    await this.angularFireAuth.auth.signOut();
  }

  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.angularFirestore.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    };

    return userRef.set(data, { merge: true});
  }
}
