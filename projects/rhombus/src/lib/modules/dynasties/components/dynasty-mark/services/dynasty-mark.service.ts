import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IDynasty, IDynastyMark } from '../../../models/dynasty';

@Injectable({
  providedIn: 'root'
})
export class RhDynastyMarkService {

  dynastyMarkCollection: AngularFirestoreCollection<IDynastyMark>;
  dynastyMarkDocument: AngularFirestoreDocument<IDynastyMark>;

  constructor(private firestore: AngularFirestore) { }

  getDynastyMarkCollection$(dynastyId: string): Observable<IDynastyMark[]>{
    this.dynastyMarkCollection = this.firestore.collection<IDynasty>('dynasties')
      .doc(dynastyId).collection<IDynastyMark>('mark', ref => ref.orderBy('version', 'desc'));

    return this.dynastyMarkCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IDynastyMark;
        const id = a.payload.doc.id;

        return { id, ...data };
      })));
  }

  getDynastyMark$(dynastyId: string, markId: string): Observable<IDynastyMark>{
    this.dynastyMarkDocument = this.firestore.collection<IDynasty>('dynasties').doc(dynastyId).collection('mark').doc(markId);

    return this.dynastyMarkDocument.valueChanges();
  }

  createDynastyMark(item: IDynastyMark) {

    this.dynastyMarkCollection.add(item);
  }

  updateDynastyMark(id: string, item: IDynasty) {
    this.dynastyMarkCollection.doc(id).update(item);
  }
}
