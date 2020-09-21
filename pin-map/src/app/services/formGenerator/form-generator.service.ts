import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OptsDrop } from './formGenerator.interface';

@Injectable({
  providedIn: 'root'
})
export class FormGeneratorService {

  constructor() {

  }

  getFieldsType() {
    return [
      'Select',
      'Radio',
      'Checkbox',
      'File',
      'Text',
      'Email',
      'Tel',
      'Number',
      'Password',
      'Textarea',
      'GeoPolygon'
    ] as string[]
  }

  getFieldsCheck(): Observable<OptsDrop[]> {
    const obj = [
      { label: 'Basico', value: 'BASICO' },
      { label: 'Preselección', value: 'PRESELECCION' },
      { label: 'Boolean (True - False)', value: 'BOOLEAN' }
    ];
    return of(obj);
  }

}
