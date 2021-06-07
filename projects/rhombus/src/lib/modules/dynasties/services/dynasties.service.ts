import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IDynasty } from '../models/dynasty';

@Injectable({
  providedIn: 'root',
})
export class RhDynastiesService {

  dynastyCollection: AngularFirestoreCollection<IDynasty>;
  dynastyDocument: AngularFirestoreDocument<IDynasty>;

  constructor(private firestore: AngularFirestore) {}

  getDynasties$(): Observable<IDynasty[]>{

    this.dynastyCollection = this.firestore.collection<IDynasty>('dynasties');

    return this.dynastyCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IDynasty;
        const id = a.payload.doc.id;

        return { id, ...data };
      })));
  }

  getDynasty$(id: string): Observable<IDynasty>{
    this.dynastyDocument = this.firestore.collection<IDynasty>('dynasties').doc(id);

    return this.dynastyDocument.valueChanges();
  }

  createDynasty(item: IDynasty) {
    this.dynastyCollection.add(item);
  }

  updateDynasty(id: string, item: IDynasty) {
    this.dynastyCollection.doc(id).update(item);
  }

}
