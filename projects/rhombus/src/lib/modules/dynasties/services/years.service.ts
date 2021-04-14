import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { IDynasty, IDynastyYear } from '@dougwilliamson/rhombus';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RhDynastyMarkYearsService {

  yearCollection: AngularFirestoreCollection<IDynastyYear>;
  yearDocument: AngularFirestoreDocument<IDynastyYear>;

  constructor(private firestore: AngularFirestore) {}

  getYears$(dynastyId: string, markId: string): Observable<IDynastyYear[]>{

    this.yearCollection = this.firestore.collection<IDynasty>('dynasties').doc(dynastyId)
                                        .collection('mark').doc(markId)
                                        .collection('years', ref => ref.orderBy('year', 'desc'));

    return this.yearCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IDynastyYear;
        const id = a.payload.doc.id;

        return { id, ...data };
      })));
  }

  getYear$(dynastyId: string, markId: string, yearId: string): Observable<IDynastyYear>{
    // tslint:disable-next-line:max-line-length
    this.yearDocument = this.firestore.collection<IDynasty>('dynasties').doc(dynastyId).collection('mark').doc(markId).collection('years').doc(yearId);
    return this.yearDocument.valueChanges();
  }

  createYear(item: IDynastyYear) {
    this.yearCollection.add(item);
  }

  updateYear(id: string, item: IDynastyYear) {
    this.yearCollection.doc(id).update(item);
  }

  // deleteDynasty(id: string) {
  //   this.yearCollection.doc(id).delete();
  // }

}
