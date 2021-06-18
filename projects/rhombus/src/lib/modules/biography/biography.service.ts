import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { IBiography } from './biography';

@Injectable({
  providedIn: 'root'
})
export class BiographyService {

  dynastyMarkYearWeeksCollection: AngularFirestoreCollection<IBiography>;

  constructor(private firestore: AngularFirestore) { }

  getBiography$(): Observable<IBiography[]> {
    this.dynastyMarkYearWeeksCollection = this.firestore.collection<IBiography>('biography', ref => ref.orderBy('id'));

    return this.dynastyMarkYearWeeksCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IBiography;
        const id = a.payload.doc.id;

        return { id, ...data };
      })));
  }
}
