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
  public create(collection: string, data: any) {
    return this.firestore.collection(`${collection}`).add(data);
  }
  //Obtiene un registro
  public getCat(documentId: string) {
    return this.firestore.collection('cats').doc(documentId).snapshotChanges();
  }
  //Obtiene todos los registros
  public getCats() {
    return this.firestore.collection('cats').snapshotChanges();
  }
  //Actualiza un registro
  public updateCat(documentId: string, data: any) {
    return this.firestore.collection('cats').doc(documentId).set(data);
  }
}
