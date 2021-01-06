import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IShellDonate {
  payPalLink: string;
  paragraphs: Array<string>;
}

@Injectable({
  providedIn: 'root',
})
export class ShellDonateService {

  contactCollection: AngularFirestoreCollection<IShellDonate>;

  constructor(private firestore: AngularFirestore) { }

  getDonate$(): Observable<IShellDonate[]> {
    this.contactCollection = this.firestore.collection<IShellDonate>('donate');

    return this.contactCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IShellDonate;

        const id = a.payload.doc.id;
        
        return { id, ...data };
      })));
  }
}
