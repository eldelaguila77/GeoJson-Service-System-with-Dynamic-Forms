import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  //Crear
  public async create(collection: string, data: any) {
    console.log('data on service', data)
    return await this.firestore.collection(`${collection}`).add(data);
  }
  //Obtiene un registro
  public getCat(documentId: string) {
    return this.firestore.collection('cats').doc(documentId).snapshotChanges();
  }
  //Obtiene todos los registros
  public getTemplates(userId: string) {
    return this.firestore.collection('templates', ((ref) => ref.where('created_by', '==', userId))).get().toPromise();
  }
  //Actualiza un registro
  public updateCat(documentId: string, data: any) {
    return this.firestore.collection('cats').doc(documentId).set(data);
  }
}
