import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

export interface IJobTag {
  name: string;
  type: number;
  url: string;
}

export interface IJob {
  jobId: number;
  name: string;
  description: string;
  dates: string;
  // tags: IJobTag[];
}

export interface IExperience {
  name: string;
  position: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  jobsCollection: AngularFirestoreCollection<IJob>;
  jobTagsCollection: AngularFirestoreCollection<IJobTag>;
  experienceDocument: AngularFirestoreDocument<IExperience>;

  constructor(private firestore: AngularFirestore) { }

  getJobs$(): Observable<IJob[]> {
    this.jobsCollection = this.firestore.collection<IJob>('jobs', ref => ref.orderBy('jobId', 'desc'));

    return this.jobsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IJob;
        const id = a.payload.doc.id;

        return { id, ...data };
      })));
  }

  getExperience$(): Observable<IExperience> {
    this.experienceDocument = this.firestore.collection('experience').doc('LeCgw68Il49nG55EMbX7');

    return this.experienceDocument.valueChanges();
  }

  getJobTags$(value: string): Observable<IJobTag[]> {
    this.jobTagsCollection = this.firestore.collection('jobs').doc(value).collection('tags', ref => ref.orderBy('type'));

    return this.jobTagsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IJobTag;
        const id = a.payload.doc.id;

        return { id, ...data };
      })));
  }
}
