import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ILatestNews } from './latest-news';

@Injectable({
  providedIn: 'root',
})
export class LatestNewsService {

  latestNewsCollection: AngularFirestoreCollection<ILatestNews>;

  constructor(private firestore: AngularFirestore) { }

  getLatestNews$(): Observable<ILatestNews[]> {
    this.latestNewsCollection = this.firestore.collection<ILatestNews>('latest-news', ref => ref.orderBy('timestamp', 'desc'));

    return this.latestNewsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ILatestNews;
        const id = a.payload.doc.id;

        return { id, ...data };
      })));
  }

  createLatestNewsItem(item: ILatestNews) {
    this.latestNewsCollection.add(item);
  }

  updateLatestNewsItem(id: string, item: ILatestNews) {
    this.latestNewsCollection.doc(id).update(item);
  }

  deleteLatestNewsItem(id: string) {
    this.latestNewsCollection.doc(id).delete();
  }
}
