import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPost } from './post';

@Injectable({
  providedIn: 'root',
})
export class RhBlogService {

  postCollection: AngularFirestoreCollection<IPost>;
  postDocument: AngularFirestoreDocument<IPost>;

  constructor(private firestore: AngularFirestore) {
    this.postCollection = this.firestore.collection<IPost>('blog');
  }

  getPosts$(): Observable<IPost[]>{
    return this.postCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IPost;
        const id = a.payload.doc.id;

        return { id, ...data };
      })));
  }

  getPost$(id: string): Observable<IPost> {
    this.postDocument = this.firestore.collection('blog').doc(id);

    return this.postDocument.valueChanges();
  }

  createBlogPost(item: IPost) {
    this.postCollection.add(item);
  }

  updateBlogPost(id: string, item: IPost) {
    this.postCollection.doc(id).update(item);
  }

  deleteBlogPost(id: string) {
    this.postCollection.doc(id).delete();
  }
}
