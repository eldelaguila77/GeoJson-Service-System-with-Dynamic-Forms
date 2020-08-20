import { Injectable } from '@angular/core';

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
      'Image',
      'Text',
      'Email',
      'Tel',
      'Number',
      'Password',
      'Textarea',
      'CaptureGeo',
      'GeoPolygon'
    ] as string[]
  }

}
