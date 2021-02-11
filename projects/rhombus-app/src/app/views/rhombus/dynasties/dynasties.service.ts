import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { IDynasty, IDynastyMark, IDynastyYear, IDynastyWeek } from '@dougwilliamson/rhombus';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RhAppDynastiesService {

  dynastyCollection: AngularFirestoreCollection<IDynasty>;
  dynastyMarkCollection: AngularFirestoreCollection<IDynastyMark>;
  dynastyMarkYearsCollection: AngularFirestoreCollection<IDynastyYear>;
  dynastyMarkYearWeeksCollection: AngularFirestoreCollection<IDynastyWeek>;

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

  getDynastyMark$(): Observable<IDynastyMark[]>{
    this.dynastyMarkCollection = this.firestore.collection<IDynasty>('dynasties').doc('1L6rf7Migy5soEJihIOd').collection<IDynastyMark>('mark');

    return this.dynastyMarkCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IDynastyMark;
        const id = a.payload.doc.id;

        return { id, ...data };
      })));
  }

  getDynastyMarkYears$(): Observable<IDynastyYear[]> {
    this.dynastyMarkYearsCollection = this.firestore.collection<IDynasty>('dynasties').doc('1L6rf7Migy5soEJihIOd').collection<IDynastyMark>('mark').doc('uRxdyQNHoh4nsLinmReR').collection<IDynastyYear>('years', ref => ref.orderBy('year', 'desc'));

    return this.dynastyMarkYearsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IDynastyYear;
        const id = a.payload.doc.id;

        return { id, ...data };
      })));
  }

  getIDynastyWeeks$(year: string): Observable<IDynastyWeek[]> {
    this.dynastyMarkYearWeeksCollection = this.firestore.collection<IDynasty>('dynasties').doc('1L6rf7Migy5soEJihIOd').collection<IDynastyMark>('mark').doc('uRxdyQNHoh4nsLinmReR').collection<IDynastyYear>('years', ref => ref.orderBy('year')).doc(year).collection<IDynastyWeek>('weeks', ref => ref.orderBy('week'));

    return this.dynastyMarkYearWeeksCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IDynastyWeek;
        const id = a.payload.doc.id;

        if (data.ourScore > 0 || data.theirScore > 0) {
            data.result = (data.ourScore > data.theirScore) ? 'W' : 'L';
            data.description = 'Final Score: ' + data.ourScore + ' - ' + data.theirScore;
        }

        return { id, ...data };
      })));
  }

}
