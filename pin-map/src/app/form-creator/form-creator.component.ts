import { Component, OnInit } from '@angular/core';
import { FormGeneratorService } from '../services/formGenerator/form-generator.service';
import { FormGenerator } from '../services/formGenerator/formGenerator.interface';

@Component({
  selector: 'app-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.css']
})
export class FormCreatorComponent implements OnInit {
  form: FormGenerator[];
  formCreator: FormGenerator;
  typeArray: string[];
  requiredArray: boolean[];
  constructor(
    private formGeneratorService: FormGeneratorService
  ) { 
    this.formCreator = {} as FormGenerator;
    this.form = [] as FormGenerator[]
  }

  ngOnInit() {
    this.typeArray = this.formGeneratorService.getFieldsType() as string[];
    console.log('typearray: ', this.typeArray)
    this.requiredArray = [true, false] as boolean[];
    this.loadForm()
  }

  addField() {
    this.form.push(this.formCreator as FormGenerator);
    this.loadForm()
    this.formCreator = {} as FormGenerator;
  }

  loadForm() {
    console.log('formulario: ', this.form)
  }

  downloadTemplate() {
    let dlAnchorElem = document.createElement("a"); 
    document.body.appendChild(dlAnchorElem); 
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.form));
    dlAnchorElem.setAttribute("href",     dataStr     );
    dlAnchorElem.setAttribute("download", "scene.json");
    dlAnchorElem.click();
  }

}
