import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IStreamData } from './stream';

@Injectable({
  providedIn: 'root'
})
export class StreamService {

  streamDataCollection: AngularFirestoreCollection<IStreamData>;

  constructor(private firestore: AngularFirestore) { }

  getStreamingData$():  Observable<IStreamData[]>{
    this.streamDataCollection = this.firestore.collection<IStreamData>('streaming');

    return this.streamDataCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IStreamData;
        const id = a.payload.doc.id;

        return { id, ...data };
      })));
  }
}
