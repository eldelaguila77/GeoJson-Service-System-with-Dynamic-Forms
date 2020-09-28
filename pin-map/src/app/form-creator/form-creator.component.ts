import { Component, OnInit, TemplateRef, OnDestroy } from '@angular/core';
import { FormGeneratorService } from '../services/formGenerator/form-generator.service';
import { FormGenerator, OptsDrop, OptsRadio, OptsCheckbox } from '../services/formGenerator/formGenerator.interface';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from '../services/firestore/firestore.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.css']
})
export class FormCreatorComponent implements OnInit, OnDestroy {
  form: FormGenerator[];
  formCreator: FormGenerator;
  typeArray: string[];
  requiredArray: boolean[];
  displayModal: boolean;
  modalRef: BsModalRef;
  formDropdown: FormGroup;
  formCheck: FormGroup;
  optionsDropdown: OptsDrop[] = [];
  optionsRadio: OptsRadio[] = [];
  alert: boolean;
  defaultOptSelected: any = null;
  optsCheckDrop: OptsDrop[];
  optsCheckbox: OptsCheckbox[] = [];
  checkSubscription$: Subscription;

  constructor(
    private formGeneratorService: FormGeneratorService,
    private readonly bsModalService: BsModalService,
    private firestoreService: FirestoreService
  ) {
    this.formCreator = {} as FormGenerator;
    this.form = [] as FormGenerator[];
    this.alert = false;
  }

  ngOnInit() {
    this.typeArray = this.formGeneratorService.getFieldsType() as string[];
    this.requiredArray = [true, false] as boolean[];
    // this.loadForm()
  }

  addField() {
    if (this.formCreator.fieldType === 'Select') {
      this.formCreator.optionsDrop = this.optionsDropdown;
      this.optionsDropdown = [];
    } else if (this.formCreator.fieldType === 'Radio') {
      this.formCreator.optionsRadio = this.optionsRadio;
      this.optionsRadio = [];
      this.optionsDropdown = [];
    } else if (this.formCreator.fieldType === 'Checkbox') {
      this.formCreator.optionsCheck = this.optsCheckbox;
      this.optsCheckbox = [];
    }
    this.form.push(this.formCreator as FormGenerator);
    // this.loadForm()
    this.formCreator = {} as FormGenerator;
  }

  // loadForm() {
  //   console.log('formulario: ', this.form)
  // }

  sendToFirebase() {
    const send = this.firestoreService.create('prueba', {form: this.form})
    console.log('formulario enviado', send)
  }

  downloadTemplate() {
    const dlAnchorElem = document.createElement('a');
    document.body.appendChild(dlAnchorElem);
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.form));
    dlAnchorElem.setAttribute('href', dataStr);
    dlAnchorElem.setAttribute('download', 'scene.json');
    dlAnchorElem.click();
  }

  openModal(template: TemplateRef<any>) {
    this.createForm();
    this.modalRef = this.bsModalService.show(template);
  }

  createForm() {
    this.checkSubscription$ = this.formGeneratorService.getFieldsCheck().subscribe(entry => {
      this.optsCheckDrop = entry;
    });

    this.formDropdown = new FormGroup({
      option: new FormControl ({ value: null, disabled: false }, Validators.required),
      val: new FormControl ({ value: null, disabled: false }, Validators.required),
      defaultOpt: new FormControl ({ value: null, disabled: false })
    });

    this.formCheck = new FormGroup({
      type: new FormControl ({ value: null, disabled: false }, Validators.required),
      opt: new FormControl ({ value: null, disabled: true }, Validators.required),
      value: new FormControl ({ value: null, disabled: true }, Validators.required),
      preselectedValue: new FormControl ({ value: null, disabled: false })
    });
  }

  addOption() {
    const { option, val, defaultOpt } = this.formDropdown.value;
    const { fieldType } = this.formCreator;
    if (defaultOpt === 'true') {
      this.defaultOptSelected = defaultOpt;
    }
    if (fieldType === 'Select') {
      this.valOptionExists(this.optionsDropdown, option, val);
      if (!this.alert) {
        const obj: OptsDrop = {
          label: option,
          value: val,
          default: defaultOpt ? defaultOpt : 'false'
        };
       this.optionsDropdown.push(obj);
       this.formDropdown.reset();
      }
    } else if (fieldType === 'Radio') {
      this.valOptionExists(this.optionsRadio, option, val);
      if (!this.alert) {
        const obj: OptsRadio = {
          label: option,
          value: val,
          default: defaultOpt ? defaultOpt : 'false',
          name: val
        };
       this.optionsRadio.push(obj);
       this.optionsDropdown = this.optionsRadio;
       this.formDropdown.reset();
      }
    } else if (fieldType === 'Checkbox') {
      const { type, opt, value, preselectedValue } = this.formCheck.value;
      this.optsCheckbox.forEach(item => {
        if (item.label === opt || item.val === val) {
          this.alert = true;
        } else {
          this.alert = false;
        }
      });
      if (!this.alert) {
        const obj: OptsCheckbox = {
          typeOpt: type,
          label: opt,
          val: value,
          preselected: preselectedValue ? preselectedValue : 'false',
        };
       this.optsCheckbox.push(obj);
       this.formCheck.reset();
       this.formCheck.controls.opt.disable();
       this.formCheck.controls.value.disable();
      }
    }
  }

  valOptionExists(arr, opt, val) {
    arr.forEach(item => {
      if (item.label === opt || item.value === val) {
        this.alert = true;
      }
    });
  }

  delRow(event) {
    this.optionsDropdown.forEach((item, index) => {
      if (event.value === item.value) {
        this.optionsDropdown.splice(index, 1);
      }
    });
  }

  ngOnDestroy() {
    if (this.checkSubscription$) {
      this.checkSubscription$.unsubscribe();
    }
  }

  changeOpt(event) {
    const { type } = this.formCheck.value;
    this.formCheck.enable();
    if (type === 'BOOLEAN') {
      this.formCheck.controls.value.clearValidators();
      this.formCheck.controls.value.updateValueAndValidity();
    }
  }
}
