import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { IBacklog } from '@dougwilliamson/rhombus';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BacklogService {

  backlogCollection: AngularFirestoreCollection<IBacklog>;

  constructor(private firestore: AngularFirestore) { }

  getBacklog$(): Observable<IBacklog[]> {
    this.backlogCollection = this.firestore.collection<IBacklog>('backlog', ref => ref.orderBy('status', 'desc'));

    return this.backlogCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IBacklog;
        const id = a.payload.doc.id;

        return { id, ...data };
      })));
  }
}
