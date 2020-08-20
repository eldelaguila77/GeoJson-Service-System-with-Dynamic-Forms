import { Component, OnInit } from '@angular/core';
import { FormGenerator } from './../services/formGenerator/formGenerator.interface'

@Component({
  selector: 'app-load-form',
  templateUrl: './load-form.component.html',
  styleUrls: ['./load-form.component.css']
})
export class LoadFormComponent implements OnInit {
  formLoaded: FormGenerator[];
  form: any[]
  constructor() {
    this.formLoaded = [] as FormGenerator[]
    //this.formLoaded = [{fieldType:"Text",fieldName:"Nombre aqui",fieldPlaceholder:"kml",fieldDefaultValue:"Eduardo", fieldRequired:true}];
    //this.formLoaded.push()
    this.form = [] as any[];
  }

  ngOnInit() {
    console.log('formLoaded, ', this.formLoaded)

  }

  sendForm() {
    console.log('info: ', this.form)
  }

  fileJsonInput() {
    let input, file, fr;

    if (typeof FileReader !== 'function') {
      alert("The file API isn't supported on this browser yet.");
      return;
    }

    input = document.getElementById('fileJsonInput');
    if (!input) {
      alert("Um, couldn't find the fileinput element.");
    }
    else if (!input.files) {
      alert("This browser doesn't seem to support the `files` property of file inputs.");
    }
    else if (!input.files[0]) {
      alert("Please select a file before clicking 'Load'");
    }
    else {
      file = input.files[0];
      fr = new FileReader();
      //fr.onload = receivedText;
      fr.onload = (e) => {
        const preText = e.target.result;
        //this.formLoaded = JSON.parse(preText) 
        for (let field of  JSON.parse(preText) )
        {
          this.formLoaded.push(field as FormGenerator)
          //this.form.push(Object.keys({[field['fieldName']]: field['fieldDefaultValue']}))
          //this.form.push(Object.keys(field).map(k => ({[field['fieldName']]: field['fieldDefaultValue']})))
          this.form.push({ carga : {[field['fieldName']] : field['fieldDefaultValue']}})   
          //Object.assign(this.form, ...Object.keys(field).map(k => ({[field['fieldName']]: field['fieldDefaultValue']})));
        }
        console.log('form: ', this.form)
      }
      fr.readAsText(file);
    }

  }
  

}
