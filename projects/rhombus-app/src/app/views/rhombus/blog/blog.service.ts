import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { IPost } from '@dougwilliamson/rhombus';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RhAppBlogService {

  postCollection: AngularFirestoreCollection<IPost>;

  postDocument: AngularFirestoreDocument<IPost>;
  // postParagraphCollection: AngularFirestoreCollection<postParagraph>;

  constructor(private firestore: AngularFirestore) {
    this.postCollection = this.firestore.collection<IPost>('blog');
    // this.postParagraphCollection = this.firestore.collection<post>('blog').doc().collection('paragraphs');
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
}
