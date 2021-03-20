import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { IDynasty, IDynastyMark, IDynastyWeek, IDynastyYear } from '@dougwilliamson/rhombus';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class YearService {

  dynastyMarkYearWeeksCollection: AngularFirestoreCollection<IDynastyWeek>;

  constructor(private firestore: AngularFirestore) {}

  getIDynastyWeeks$(year: string): Observable<IDynastyWeek[]> {
    // tslint:disable-next-line:max-line-length
    this.dynastyMarkYearWeeksCollection = this.firestore.collection<IDynasty>('dynasties').doc('1L6rf7Migy5soEJihIOd').collection<IDynastyMark>('mark').doc('uRxdyQNHoh4nsLinmReR').collection<IDynastyYear>('years').doc(year).collection<IDynastyWeek>('weeks', ref => ref.orderBy('week'));

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
