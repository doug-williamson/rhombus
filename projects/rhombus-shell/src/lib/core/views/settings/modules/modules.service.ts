import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IModule } from './module';

@Injectable({
  providedIn: 'root',
})
export class RhShellModulesService {

  moduleCollection: AngularFirestoreCollection<IModule>;

  constructor(private firestore: AngularFirestore) { }

  getModules$(): Observable<IModule[]> {
    this.moduleCollection = this.firestore.collection('_metadata').doc('HkxoJ5pwH1mTEGh3FWww').collection('modules');

    return this.moduleCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IModule;
        const id = a.payload.doc.id;

        return { id, ...data };
      })));
  }

  updateModule(id: string, item: IModule) {
    this.moduleCollection.doc(id).update(item);
  }
}
