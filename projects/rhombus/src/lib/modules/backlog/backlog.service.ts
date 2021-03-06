import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBacklog } from './backlog';

@Injectable({
  providedIn: 'root',
})
export class BacklogService {

  backlogCollection: AngularFirestoreCollection<IBacklog>;

  constructor(private firestore: AngularFirestore) { }

  getBacklog$(): Observable<IBacklog[]> {
    this.backlogCollection = this.firestore.collection<IBacklog>('backlog', ref => ref.orderBy('status'));

    return this.backlogCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IBacklog;
        const id = a.payload.doc.id;

        return { id, ...data };
      })));
  }

  createBacklogItem(item: IBacklog) {
    this.backlogCollection.add(item);
  }

  updateBacklogItem(id: string, item: IBacklog) {
    this.backlogCollection.doc(id).update(item);
  }

  deleteBacklogItem(id: string) {
    this.backlogCollection.doc(id).delete();
  }
}
