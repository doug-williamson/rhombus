import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IDynasty, IDynastyWeek } from '../models/dynasty';

@Injectable({
  providedIn: 'root',
})
export class RhDynastyMarkYearWeeksService {

  weekCollection: AngularFirestoreCollection<IDynastyWeek>;
  weekDocument: AngularFirestoreDocument<IDynastyWeek>;

  constructor(private firestore: AngularFirestore) {}

  getWeeks$(dynastyId: string, markId: string, yearId: string): Observable<IDynastyWeek[]>{

    this.weekCollection = this.firestore.collection<IDynasty>('dynasties').doc(dynastyId)
                                        .collection('mark').doc(markId)
                                        .collection('years').doc(yearId)
                                        .collection('weeks', ref => ref.orderBy('week', 'desc'));

    return this.weekCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IDynastyWeek;
        const id = a.payload.doc.id;

        return { id, ...data };
      })));
  }

  getWeek$(dynastyId: string, markId: string, weekId: string): Observable<IDynastyWeek>{
    // tslint:disable-next-line:max-line-length
    this.weekDocument = this.firestore.collection<IDynasty>('dynasties').doc(dynastyId).collection('mark').doc(markId).collection('weeks').doc(weekId);
    return this.weekDocument.valueChanges();
  }

  createWeek(item: IDynastyWeek) {
    this.weekCollection.add(item);
  }

  updateWeek(id: string, item: IDynastyWeek) {
    this.weekCollection.doc(id).update(item);
  }

  // deleteDynasty(id: string) {
  //   this.weekCollection.doc(id).delete();
  // }

}
