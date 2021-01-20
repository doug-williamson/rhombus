import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IAppMetadata } from '../models/app';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private appMetadataDocument!: AngularFirestoreDocument<IAppMetadata>;

  constructor(private firestore: AngularFirestore) { }

  getAppMetadata$(id: string): Observable<IAppMetadata> {
    if (!this.appMetadataDocument) {
      this.appMetadataDocument = this.firestore.collection('_metadata').doc(id);
    }

    return this.appMetadataDocument.valueChanges();
  }
}
