import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IShellContact {
  discordLink: string;
  paragraphs: Array<string>;
}

@Injectable({
  providedIn: 'root',
})
export class ShellContactService {

  contactCollection: AngularFirestoreCollection<IShellContact>;

  constructor(private firestore: AngularFirestore) { }

  getContact$(): Observable<IShellContact[]> {
    this.contactCollection = this.firestore.collection<IShellContact>('contact');

    return this.contactCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        console.log('Doug');
        const data = a.payload.doc.data() as IShellContact;
        const id = a.payload.doc.id;

        return { id, ...data };
      })));
  }
}
